// pages/api/get-botname.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@line/bot-sdk";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // どのアカウントかを query パラメータで受け取る
    const account = req.query.account; // 例: '1' または '2'

    const client = new Client({
      channelAccessToken: process.env[`CHANNEL_ACCESS_TOKEN_${account}`]!,
      channelSecret: process.env[`CHANNEL_SECRET_${account}`]!,
    });

    const profile = await client.getBotInfo();
    res.status(200).json({ success: true, botName: profile.displayName });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to get bot info" });
  }
}
