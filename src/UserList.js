import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 값이 바뀌기 전');
      console.log(user);
    };
  }, [user]);

  return (
    <div>
      <b style={{ color: active ? 'green' : 'black', cursor: 'pointer' }} onClick={() => onToggle(id)}>
        {username}
      </b>{' '}
      <span>({email})</span>
      {/* 새로운 함수를 on____에 호출하는 법 */}
      <button onClick={() => onRemove(id)}>삭제</button>
      {/* onClick={onRemove(id)}로 실행할 경우 렌더와 동시에 모두 삭제됨 */}
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);
