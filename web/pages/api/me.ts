import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // ここでセッションやクッキー、LINEのOAuth情報などから userId を取得
    const myUserId = req.query.userId || null; // 仮に query から受け取る例
    if (!myUserId) {
      return res.status(400).json({ success: false, error: "No userId provided" });
    }

    res.status(200).json({ success: true, userId: myUserId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to get userId" });
  }
}
