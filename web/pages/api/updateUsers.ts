// pages/api/updateUsers.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { updateUserRole } from "../../src/sheets";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { users } = req.body;
    for (const u of users) {
      await updateUserRole(u.id, u.role);
    }
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to update users" });
  }
}
