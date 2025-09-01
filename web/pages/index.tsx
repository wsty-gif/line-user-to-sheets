import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users').then(res => res.json()).then(setUsers);
  }, []);

  const changeRole = async (userId, role) => {
    await fetch('/api/updateRole', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ userId, role })
    });
    setUsers(users.map(u => u.userId === userId ? {...u, role} : u));
  };

  return (
    <div>
      <h1>ユーザー管理</h1>
      <table>
        <thead>
          <tr><th>アイコン</th><th>名前</th><th>権限</th><th>操作</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.userId}>
              <td><img src={u.pictureUrl} width={50}/></td>
              <td>{u.displayName}</td>
              <td>{u.role}</td>
              <td>
                <button onClick={() => changeRole(u.userId,'admin')}>管理者</button>
                <button onClick={() => changeRole(u.userId,'user')}>一般</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
