import { useEffect, useState } from "react";

export default function AdminPage() {
  const [users, setUsers] = useState<string[][] | null>(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>管理者画面</h1>
      {users ? (
        <table border={1} cellPadding={5}>
          <thead>
            <tr>{users[0].map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {users.slice(1).map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>読み込み中...</p>
      )}
    </div>
  );
}
