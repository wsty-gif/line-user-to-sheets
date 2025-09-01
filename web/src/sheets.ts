// src/sheets.ts
import { google } from "googleapis";

export async function getUsers() {
  const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS!);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const DATA_RANGE = 'Sheet1!A2:G';

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: DATA_RANGE, // シート名と範囲に合わせて変更
  });

  const rows = res.data.values || [];
  return rows.map((r) => ({
    name: r[3] || "",
    email: r[5] || "",
  }));
}
