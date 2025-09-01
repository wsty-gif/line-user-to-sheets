import type { NextApiRequest, NextApiResponse } from "next";
import { sheets } from "../../lib/sheetsClient";

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const RANGE = "Sheet1!A1:C"; // 表示範囲を指定

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    res.status(200).json(response.data.values || []);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Google Sheets 読み込みエラー" });
  }
}
