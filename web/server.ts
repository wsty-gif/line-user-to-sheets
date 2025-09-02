import express from "express";
import { Client, middleware, WebhookEvent } from "@line/bot-sdk";
import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const client = new Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN_1 ?? "",
  channelSecret: process.env.CHANNEL_SECRET_1 ?? "",
});

// 権限ごとのリッチメニューID
const ROLE_RICHMENU_MAP: Record<string, string> = {
  admin: "richmenu-xxxx-admin",
  staff: "richmenu-xxxx-staff",
  guest: "richmenu-xxxx-guest",
};

// Google Sheets APIの初期化
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS!),
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});
const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = process.env.SPREADSHEET_ID!;

// Webhook受信
app.post("/webhook", middleware(client.config), async (req, res) => {
  const events: WebhookEvent[] = req.body.events;
  for (const event of events) {
    if (event.type === "follow") { // 友だち追加
      const userId = event.source.userId;

      // 1. スプレッドシートから権限を取得
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: "Users!A:B", // userId, role
      });

      const rows = response.data.values || [];
      const user = rows.find(r => r[0] === userId);
      const role = user ? user[1] : "guest";

      // 2. 権限に応じてリッチメニューを割り当て
      const richMenuId = ROLE_RICHMENU_MAP[role] ?? ROLE_RICHMENU_MAP["guest"];
      await client.linkRichMenuToUser(userId, richMenuId);

      console.log(`Linked ${richMenuId} to ${userId} (role=${role})`);
    }
  }

  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
