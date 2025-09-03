import React, { useState, useEffect } from "react";

type User = { id: string; name: string; role: string; botName: string };

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [botName, setBotName] = useState("");

  let account = 0;
  if (botName == '株式会社TETOTE') {
    account = 1;
  } else if (botName == 'mokara bridal etc.') {
    account = 3;
  } 
  // else if (botName == 'XXXXX') {
  //   account = 4;
  // } 

  // ログイン中のbotNameを取得（例として固定）
  useEffect(() => {
    fetch("/api/get-botname?account=" + account)
      .then(res => res.json())
      .then(data => {
        if (data.success) setBotName(data.botName);
      });
  }, []);

  // ユーザー一覧取得
  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        if (data.success) setUsers(data.users);
      });
  }, []);

  // ユニークIDで更新
  const handleRoleChange = (id: string, newRole: string) => {
    setUsers(prev =>
      prev.map(u => (u.id === id ? { ...u, role: newRole } : u))
    );
  };

  const handleUpdate = async () => {
    const res = await fetch("/api/updateUsers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ users }),
    });
    const data = await res.json();
    if (data.success) alert("更新完了");
    else alert("更新失敗");
  };

  const filteredUsers = users.filter(u => u.botName === botName);

  // 更新後にリッチメニューも切り替え
  const handleUpdateAndSetMenu = async () => {
    await handleUpdate(); // まずスプレッドシートを更新

    // 自分のLINE userId を環境変数等から取得
    const myUserId = "U46bb39064efd2b4b75b7b4c088e5ba63";

    const res = await fetch(`/api/setRichMenu?userId=${myUserId}`);
    const data = await res.json();
    if (data.success) alert(`リッチメニューを ${data.richMenuId} に切替完了`);
    else alert("リッチメニュー切替失敗");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">ユーザー一覧</h1>
      {botName && (
        <h2 className="text-lg font-medium mb-4">
          ログイン中の公式LINEアカウント: {botName}
        </h2>
      )}

      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">名前</th>
            <th className="border border-gray-400 p-2">役割</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(u => (
            <tr key={u.id} className="bg-gray-50">
              <td className="border border-gray-400 p-2">{u.name}</td>
              <td className="border border-gray-400 p-2">
                <select
                  value={u.role}
                  onChange={e => handleRoleChange(u.id, e.target.value)}
                  className="border border-gray-300 rounded p-1"
                >
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </td>
            </tr>
          ))}

          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan={2} className="border border-gray-400 p-2 text-center">
                ユーザーが存在しません
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <button
        onClick={handleUpdateAndSetMenu}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        更新 &amp; リッチメニュー切替
      </button>
    </div>
  );
}
