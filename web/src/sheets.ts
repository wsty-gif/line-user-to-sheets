// src/sheets.ts
import { google } from "googleapis";

export async function getUsers() {
  const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS!);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Sheet1!D2:E", // シート名と範囲に合わせて変更
  });

  const rows = res.data.values || [];
  return rows.map((r) => ({
    name: r[0] || "",
    email: r[1] || "",
  }));
}
