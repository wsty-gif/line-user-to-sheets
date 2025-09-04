// pages/api/listRichMenus.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@line/bot-sdk";
import { config } from "dotenv";
import path from "path";

config({ path: path.resolve(__dirname, "../web/.env.local") });

// botName から account を判定
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
    // return 3;
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

// API ハンドラー
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const botName = req.query.botName as string;
    console.log('ggg',botName);
  if (!botName) return res.status(400).json({ success: false, error: "botName is required" });

  try {
    console.log('ddd',botName);
    const account = getAccountByBotName(botName);
    console.log('eee',account);
    const client = getClient(account);
    console.log('fff',client);

    const richMenus = await client.getRichMenuList();
    return res.status(200).json({ success: true, richMenus });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
