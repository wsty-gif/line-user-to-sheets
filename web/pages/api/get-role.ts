import type { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "../../src/sheets";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ success: false, error: "userId required" });

  const users = await getUsers();
  const user = users.find(u => u.userId === userId);
  if (!user) return res.status(404).json({ success: false, error: "User not found" });

  res.status(200).json({ success: true, role: user.role });
}
