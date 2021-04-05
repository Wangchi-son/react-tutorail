import React, { useState } from "react";

function Counter() {
  // useState 사용법
  // 배열의 첫 번째 인자는 상태, 두번째 인자는 바꿔주는 함수, useState내부의 값은 기본값
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // 업데이트 함수
    // 현재 상태를 가져와서 업데이트 하겠다(prevNumber는 이름이 뭐가되든 상관없음)
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
