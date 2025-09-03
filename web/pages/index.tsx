import React, { useState, useEffect } from "react";

type User = { id: string; name: string; role: string; botName: string };

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [botName, setBotName] = useState("");
  const [account, setAccount] = useState<number | null>(null);

  // botName → account 判定関数
  function getAccountFromBotName(botName: string): number | null {
    // console.log('bbb',botName);
    // アカウント追加時修正箇所
    switch (botName) {
      case "株式会社TETOTE":
        return 1;
      case "mokara bridal etc.":
        return 3;

      // case "XXXXX":
      // return 4;

      default:
        return null;
    }
  }

  // ログイン中の botName を取得
  useEffect(() => {
    console.log('aaa',account);
    fetch(`/api/get-botname?account=${account || 1}`) // ← account 固定せず botName を返す API にするのがおすすめ
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setBotName(data.botName);
          const acc = getAccountFromBotName(data.botName);
          setAccount(acc);
        }
      });
  }, []);

  // API 呼び出し
  useEffect(() => {
    if (!botName) return;
    fetch(`/api/listRichMenus?botName=${encodeURIComponent(botName)}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [botName]);

  // ログイン中のbotNameを取得（例として固定）
  // useEffect(() => {
  //   // まず botName を取得
  //   fetch("/api/get-botname?account=3") // 仮に3を固定して最初に取る
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.success) {
  //         setBotName(data.botName);

  //         // botName に応じて account を決定
  //         let account = 0;
  //         if (data.botName === "株式会社TETOTE") {
  //           account = 1;
  //         } else if (data.botName === "mokara bridal etc.") {
  //           account = 3;
  //         }
  //         // アカウント追加時修正箇所
  //         // else if (botName == 'XXXXX') {
  //         //   account = 4;
  //         // } 

  //         // account を使って再度 fetch
  //         fetch("/api/get-botname?account=" + account)
  //           .then(res => res.json())
  //           .then(data2 => {
  //             if (data2.success) setBotName(data2.botName);
  //           });
  //       }
  //     });
  // }, []);

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
  // console.log("filteredUsers", filteredUsers);

  // 更新後にリッチメニューも切り替え
  const handleUpdateAndSetMenu = async () => {
    await handleUpdate(); // まずスプレッドシートを更新

    for (const user of filteredUsers) {
      let account = 0;
      // アカウント追加時修正箇所
      if (user.botName === "株式会社TETOTE") {
        account = 1;
      } else if (user.botName === "mokara bridal etc.") {
        account = 3;
      }
      // else if (botName == 'XXXXX') {
      //   account = 4;
      // } 

      // role に応じて割り当てるリッチメニューIDを決定
      const richMenuId =
        user.role === "admin"
          ? process.env[`ADMIN_RICHMENU_ID_${account}`]
          : process.env[`USER_RICHMENU_ID_${account}`];

          // API にリクエスト
      const res = await fetch(`/api/setRichMenu?userId=${user.id}&richMenuId=${richMenuId}`);
      const data = await res.json();
      if (!data.success) {
        console.error(`ユーザー ${user.name} のリッチメニュー切替失敗`);
      }
    }
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
