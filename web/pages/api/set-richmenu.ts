// pages/api/setRichMenu.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@line/bot-sdk";
import { getUsers } from "../../src/sheets";

// botName → account番号を判定
function getAccountByBotName(botName: string): number {
  switch (botName) {
    // アカウント追加時修正箇所
    case "株式会社TETOTE":
      return 1;
    case "mokara bridal etc.":
      return 3;
    case "飲食店テスト":
      return 4;

    // case "mokara bridal etc.":
    //   return 3;

    default:
      throw new Error(`Unknown botName: ${botName}`);
  }
}

// Client 作成
function getClient(account: number) {
  const channelAccessToken = process.env[`CHANNEL_ACCESS_TOKEN_${account}`];
  const channelSecret = process.env[`CHANNEL_SECRET_${account}`];

  if (!channelAccessToken || !channelSecret) {
    throw new Error(`Channel token/secret not found for account ${account}`);
  }

  return new Client({ channelAccessToken, channelSecret });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { botName, userId } = req.query;

    if (!botName || typeof botName !== "string") {
      return res.status(400).json({ success: false, error: "botName is required" });
    }
    if (!userId || typeof userId !== "string") {
      return res.status(400).json({ success: false, error: "userId is required" });
    }

    // botNameからaccount判定
    const account = getAccountByBotName(botName);

    // Clientを生成
    const client = getClient(account);

    // スプレッドシートからユーザー一覧を取得
    const users = await getUsers();
    const user = users.find((u) => u.userId === userId);
    if (!user) return res.status(404).json({ success: false, error: "User not found" });

    // roleに応じたリッチメニューIDを可変で選択
    const richMenuId =
      user.role === "admin"
        ? process.env[`ADMIN_RICHMENU_ID_${account}`]
        : process.env[`USER_RICHMENU_ID_${account}`];

    if (!richMenuId) {
      throw new Error(`RichMenu ID not found for account ${account}, role ${user.role}`);
    }

    await client.linkRichMenuToUser(userId, richMenuId);

    return res.status(200).json({ success: true, richMenuId });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
