import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@line/bot-sdk";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { account } = req.query;

  const accountNum = Number(account) || 1; // デフォルト 1

  const channelAccessToken = process.env[`CHANNEL_ACCESS_TOKEN_${accountNum}`];
  const channelSecret = process.env[`CHANNEL_SECRET_${accountNum}`];

  if (!channelAccessToken || !channelSecret) {
    return res.status(500).json({ success: false, error: "no channel access token" });
  }

  const client = new Client({
    channelAccessToken,
    channelSecret,
  });

  try {
    const botInfo = await client.getBotInfo();
    res.status(200).json({ success: true, botName: botInfo.displayName });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "getBotInfo failed" });
  }
}
