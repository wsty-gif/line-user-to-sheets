// src/sheets.ts
import { google } from "googleapis";

export async function getUsers() {
  const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS!);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const DATA_RANGE = "Sheet1!A2:G";

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: DATA_RANGE,
  });

  const rows = res.data.values || [];
  // スプレッドシートの列をオブジェクトに変換
  return rows.map((r) => ({
    botName: r[1] || "",
    userId: r[2] || "",
    name: r[3] || "",
    role: r[5] || "",
  }));
}

// 役割更新用API
export async function updateUserRole(userId: string, role: string) {
  const rows = await getUsers();
  const index = rows.findIndex(r => r.userId === userId);
  if (index < 0) return false;

  const sheets = google.sheets({ version: "v4", auth: new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS!),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })});

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: `Sheet1!F${index + 2}`, // F列がrole、ヘッダーを考慮して+2
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [[role]] },
  });

  return true;
}
