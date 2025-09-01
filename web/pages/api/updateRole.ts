import { updateUserRole } from '../../lib/sheetsClient';

export default async function handler(req, res) {
  const { userId, role } = req.body;
  await updateUserRole(userId, role);
  res.status(200).json({ success: true });
}
