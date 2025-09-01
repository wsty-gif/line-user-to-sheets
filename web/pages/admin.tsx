import { useEffect, useState } from "react";

type User = { name: string; email: string };

export default function Admin() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>管理者画面</h1>
      <table border={1} cellPadding={5}>
        <thead>
          <tr><th>名前</th><th>メール</th></tr>
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
