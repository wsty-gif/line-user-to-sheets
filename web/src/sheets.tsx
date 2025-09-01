import { google } from "googleapis";

const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS!);
credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

export async function getUsers() {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Sheet1!A1:C10", // 必要に応じて変更
  });
  return res.data.values || [];
}
