import { upsertUserProfile } from '../../src/sheets';

export async function getUsers(sheets) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: process.env.SHEET_NAME || 'Sheet1',
  });
  return res.data.values || [];
}

export async function updateUserRole(userId, role) {
  const updatedAt = new Date().toISOString();
  await upsertUserProfile({ timestamp: updatedAt, botName: '', userId, displayName: '', pictureUrl: '', role, updatedAt });
}
