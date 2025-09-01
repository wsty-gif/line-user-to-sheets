import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS || "{}");
    credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const sheetId = process.env.SHEET_ID;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Sheet1!A:B",
    });

    const rows = response.data.values || [];
    const data = rows.map((r) => ({ name: r[0], email: r[1] }));

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "スプレッドシート取得失敗" });
  }
}
