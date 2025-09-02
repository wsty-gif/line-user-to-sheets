// scripts/listRichMenus.ts
import { config } from "dotenv";
import { Client } from "@line/bot-sdk";
import path from "path";

// web/.env.local を読むように明示する
config({ path: path.resolve(__dirname, "../web/.env.local") });

const client = new Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN_1 ?? "",
  channelSecret: process.env.CHANNEL_SECRET_1 ?? "",
});

async function listRichMenus() {
  try {
    const res = await client.getRichMenuList();
    console.log("RichMenus:", JSON.stringify(res, null, 2));
  } catch (err) {
    console.error("Error fetching rich menus:", err);
  }
}

listRichMenus();
