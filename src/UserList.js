import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    // 마운트 될 때
    // props로 받은 값을 state로 설정하는 것
    // 외부 API 요청, REST API를 요청할 때
    // D3, Video.js 등등 라이브러리를 사용하게 될 때
    // setInterval, setTimeout 같은 작업도 사용
    return () => {
      // 언마운트 될 때
      // clearInterval, clearTimeout 같은 작업
      // 라이브러리 인스턴스 제거
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);

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
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;
