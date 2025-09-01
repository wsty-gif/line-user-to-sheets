import { useEffect, useState } from "react";

export default function AdminPage() {
  const [rows, setRows] = useState<string[][]>([]);

  useEffect(() => {
    fetch("/api/admin-data")
      .then(res => res.json())
      .then(data => setRows(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>管理者画面</h1>
      <table border={1} cellPadding={5}>
        <thead>
          <tr>{rows[0]?.map((col, idx) => <th key={idx}>{col}</th>)}</tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, idx) => (
            <tr key={idx}>
              {row.map((col, i) => <td key={i}>{col}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
