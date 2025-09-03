import express from "express";
import { Client, middleware, WebhookEvent } from "@line/bot-sdk";
import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

// Google Sheets APIの初期化
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS!),
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});
const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = process.env.SPREADSHEET_ID!;

// botName → アカウント番号判定関数
function getAccountFromBotName(botName: string): number | null {
  // アカウント追加時修正箇所
  switch (botName) {
    case "株式会社TETOTE":
      return 1;
    case "mokara bridal etc.":
      return 3;
    // 追加アカウントがあればここに追記
    // case "XXXXX": return 4;
    default:
      return null;
  }
}

// botName → 権限ごとのリッチメニューIDマップ
function getRoleRichMenuMap(botName: string): Record<string, string> {
  const account = getAccountFromBotName(botName);
  if (!account) throw new Error(`Unknown botName: ${botName}`);

  return {
    admin: process.env[`ADMIN_RICHMENU_ID_${account}`]!,
    user: process.env[`USER_RICHMENU_ID_${account}`]!,
  };
}

// botName → Client 作成
function getClientByBotName(botName: string) {
  const account = getAccountFromBotName(botName);
  if (!account) throw new Error(`Unknown botName: ${botName}`);

  const channelAccessToken = process.env[`CHANNEL_ACCESS_TOKEN_${account}`];
  const channelSecret = process.env[`CHANNEL_SECRET_${account}`];

  if (!channelAccessToken || !channelSecret) {
    throw new Error(`Channel token/secret not found for account ${account}`);
  }

  return new Client({ channelAccessToken, channelSecret });
}

// Webhook受信
app.post("/webhook", express.json(), async (req, res) => {
  const events: WebhookEvent[] = req.body.events;

  for (const event of events) {
    if (event.type === "follow") {
      const userId = event.source.userId;

      // 1. スプレッドシートから userId 行を検索
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1!A:G", // 全列取得
      });

      const rows = response.data.values || [];
      const userRow = rows.find(r => r[2] === userId); // C列が userId
      const botName = userRow ? userRow[1] : null;     // B列が botName
      const role = userRow ? userRow[5] : "user";     // F列が role

      if (!botName) {
        console.warn(`BotName not found for userId ${userId}`);
        continue;
      }

      // 2. botName に応じた Client とリッチメニュー取得
      const client = getClientByBotName(botName);
      const ROLE_RICHMENU_MAP = getRoleRichMenuMap(botName);

      const richMenuId = ROLE_RICHMENU_MAP[role] ?? ROLE_RICHMENU_MAP["user"];
      await client.linkRichMenuToUser(userId, richMenuId);

      console.log(`Linked ${richMenuId} to ${userId} (role=${role}) for bot=${botName}`);
    }
  }

  res.status(200).send("OK");
});



app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
