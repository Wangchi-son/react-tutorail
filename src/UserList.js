import React from 'react';

function User({ user, onRemove }) {
  const { username, email, id } = user;
  return (
    <div>
      <b>{username}</b> <span>({email})</span>
      {/* 새로운 함수를 on____에 호출하는 법 */}
      <button onClick={() => onRemove(id)}>삭제</button>
      {/* onClick={onRemove(id)}로 실행할 경우 렌더와 동시에 모두 삭제됨 */}
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;
