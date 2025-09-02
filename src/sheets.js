require('dotenv').config();
const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');

const googleCredentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
googleCredentials.private_key = googleCredentials.private_key.replace(/\\n/g, '\n');

const auth = new GoogleAuth({
  credentials: googleCredentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_NAME = process.env.SHEET_NAME || 'Sheet1';
const DATA_RANGE = `${SHEET_NAME}!A:G`;

// ヘッダー行を保証
async function ensureHeaderRow() {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET_NAME}!A1:G1`,
  });

  const values = res.data.values;
  const expected = ['timestamp', 'botName', 'userId', 'displayName', 'pictureUrl', 'role', 'update'];

  if (!values || !values[0] || values[0].join('') === '') {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:G1`,
      valueInputOption: 'RAW',
      requestBody: { values: [expected] },
    });
  }
}

// ユーザープロファイルを追加または上書き
async function upsertUserProfile({ timestamp, botName, userId, displayName, pictureUrl }) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: DATA_RANGE,
  });

  const rows = res.data.values || [];
  let targetRow = -1;
  let currentRole = 'user'; // デフォルト

  for (let i = 1; i < rows.length; i++) {
    if (rows[i][2]?.trim() === userId) { // C列 = userId
      targetRow = i + 1;
      currentRole = rows[i][5] || 'user'; // F列 = role を保持
      break;
    }
  }

  const record = [[timestamp, botName, userId, displayName, pictureUrl, currentRole, new Date().toISOString()]];

  if (targetRow === -1) {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: DATA_RANGE,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: record },
    });
  } else {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A${targetRow}:G${targetRow}`,
      valueInputOption: 'RAW',
      requestBody: { values: record },
    });
  }
}


// ユーザー情報を取得（権限確認用）
async function getUserRecord(userId) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: DATA_RANGE,
  });

  const rows = res.data.values || [];
  for (let i = 1; i < rows.length; i++) {
    if ((rows[i][2] || '') === userId) {
      return {
        timestamp: rows[i][0],
        botName: rows[i][1],
        userId: rows[i][2],
        displayName: rows[i][3],
        pictureUrl: rows[i][4],
        role: rows[i][5] || 'user',
        update: rows[i][6],
      };
    }
  }
  return null;
}

module.exports = { ensureHeaderRow, upsertUserProfile, getUserRecord };
