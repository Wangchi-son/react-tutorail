import React, { useContext } from 'react';

import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);
  return (
    <div>
      <b
        style={{ color: active ? 'green' : 'black', cursor: 'pointer' }}
        onClick={() =>
          dispatch({
            type: 'TOGGLE_USER',
            id
          })
        }>
        {username}
      </b>{' '}
      <span>({email})</span>
      {/* 새로운 함수를 on____에 호출하는 법 */}
      <button
        onClick={() =>
          dispatch({
            type: 'REMOVE_USER',
            id
          })
        }>
        삭제
      </button>
      {/* onClick={onRemove(id)}로 실행할 경우 렌더와 동시에 모두 삭제됨 */}
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
);
