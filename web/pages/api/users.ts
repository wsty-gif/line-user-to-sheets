// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "../../src/sheets";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await getUsers();
    res.status(200).json({ success: true, users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to fetch spreadsheet" });
  }
}
