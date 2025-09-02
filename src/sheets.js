require('dotenv').config();
const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');

// GOOGLE_CREDENTIALS をオブジェクトに変換
const googleCredentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

// private_key の改行を実際の改行に置換
googleCredentials.private_key = googleCredentials.private_key.replace(/\\n/g, '\n');

const auth = new GoogleAuth({
  credentials: googleCredentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_NAME = process.env.SHEET_NAME || 'Sheet1';

const DATA_RANGE = `${SHEET_NAME}!A:G`; // timestamp, botName, userId, displayName, pictureUrl, 'role', 'update'

// ヘッダー行を保証
async function ensureHeaderRow() {
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:G1`,
    });

    const values = res.data.values;
    const expected = ['timestamp', 'botName', 'userId', 'displayName', 'pictureUrl', 'role', 'update'];

    if (!values || !values[0] || values[0].length === 0 || values[0].join('') === '') {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1:G1`,
        valueInputOption: 'RAW',
        requestBody: { values: [expected] },
      });
    }
  } catch (e) {
    throw e;
  }
}

// ユーザープロファイルを追加または上書き
async function upsertUserProfile({ user }) {
  const { timestamp, botName, userId, displayName, pictureUrl } = user;
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: DATA_RANGE,
  });

  const rows = res.data.values || [];
  let targetRow = -1;

  // rows[i][3] が D列（名前）
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][3]?.trim() === user.name.trim()) {
      targetRow = i + 1;
      break;
    }
  }

  const record = [[timestamp, botName, userId, displayName, pictureUrl, 'user', new Date().toISOString()]];

  if (targetRow === -1) {
    // 追記
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: DATA_RANGE,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: record },
    });
  } else {
    // 上書き
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A${targetRow}:G${targetRow}`,
      valueInputOption: 'RAW',
      requestBody: { values: record },
    });
  }
}

module.exports = { ensureHeaderRow, upsertUserProfile };
