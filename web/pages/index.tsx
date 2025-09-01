// pages/index.tsx
import { useEffect, useState } from "react";

type User = { name: string; email: string };

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.users);
        }
      });
  }, []);

  return (
    <div className="p-4">
      <h1>ユーザー一覧</h1>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>名前</th>
            <th>メール</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
