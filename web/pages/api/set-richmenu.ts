// pages/api/setRichMenu.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@line/bot-sdk";
import { getUsers } from "../../src/sheets";

// 事前に作成したリッチメニューID
const RICHMENU_IDS = {
  user: "richmenu-id-user",   // 一般ユーザー用
  admin: "richmenu-id-admin", // 管理者用
};

// ここではアカウントごとに環境変数を切り替え
const CHANNEL_ACCESS_TOKEN = process.env.CHANNEL_ACCESS_TOKEN_1!;
const CHANNEL_SECRET = process.env.CHANNEL_SECRET_1!;

const client = new Client({
  channelAccessToken: CHANNEL_ACCESS_TOKEN,
  channelSecret: CHANNEL_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await getUsers(); // スプレッドシートから取得
    // リクエストに userId があればそのユーザーの role を取得
    const { userId } = req.query;
    if (!userId || typeof userId !== "string") {
      return res.status(400).json({ success: false, error: "userId is required" });
    }

    const user = users.find(u => u.userId === userId);
    if (!user) return res.status(404).json({ success: false, error: "User not found" });

    const richMenuId = RICHMENU_IDS[user.role as "user" | "admin"];
    await client.linkRichMenuToUser(userId, richMenuId);

    return res.status(200).json({ success: true, richMenuId });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Failed to set rich menu" });
  }
}
