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

const DATA_RANGE = `${SHEET_NAME}!A:E`; // timestamp, botName, userId, displayName, pictureUrl

// ヘッダー行を保証
async function ensureHeaderRow() {
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:E1`,
    });

    const values = res.data.values;
    const expected = ['timestamp', 'botName', 'userId', 'displayName', 'pictureUrl'];

    if (!values || !values[0] || values[0].length === 0 || values[0].join('') === '') {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1:E1`,
        valueInputOption: 'RAW',
        requestBody: { values: [expected] },
      });
    }
  } catch (e) {
    throw e;
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

  for (let i = 1; i < rows.length; i++) {
    // B列(botName)とC列(userId)でユニーク判定
    if (rows[i][1] === botName && rows[i][2] === userId) {
      targetRow = i + 1;
      break;
    }
  }

  const record = [[timestamp, botName, userId, displayName, pictureUrl]];

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
      range: `${SHEET_NAME}!A${targetRow}:E${targetRow}`,
      valueInputOption: 'RAW',
      requestBody: { values: record },
    });
  }
}

module.exports = { ensureHeaderRow, upsertUserProfile };
