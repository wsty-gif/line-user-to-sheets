import { getUsers } from '../../lib/sheetsClient';

export default async function handler(req, res) {
  const users = await getUsers();
  res.status(200).json(users.map(u => ({
    userId: u[2],
    displayName: u[3],
    pictureUrl: u[4],
    role: u[5]
  })));
}
