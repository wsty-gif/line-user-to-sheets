// pages/api/update-roles.ts
import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { users } = req.body; // [{ name: string, role: string }]

    if (!users || !Array.isArray(users)) {
      return res.status(400).json({ success: false, message: "Invalid request body" });
    }

    // Google Sheets API 認証
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SPREADSHEET_ID as string;

    // 名前一覧を取得（B列）
    const nameRange = "Sheet1!B2:B";
    const nameRes = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: nameRange,
    });

    const nameRows = nameRes.data.values || [];

    // role を F列に書き込み
    const updates = users.map((u: { name: string; role: string }) => {
      const rowIndex = nameRows.findIndex((row) => row[0] === u.name);
      if (rowIndex === -1) return null;

      // B列が見つかった行のF列に書き込み
      const targetRange = `Sheet1!F${rowIndex + 2}`;
      return {
        range: targetRange,
        values: [[u.role]],
      };
    }).filter(Boolean);

    if (updates.length === 0) {
      return res.status(400).json({ success: false, message: "No matching users found" });
    }

    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId,
      requestBody: {
        valueInputOption: "RAW",
        data: updates,
      },
    });

    res.status(200).json({ success: true, message: "Roles updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
