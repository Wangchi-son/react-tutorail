import React, { useState } from "react";

function Counter() {
  // useState 사용법
  // 배열의 첫 번째 인자는 상태, 두번째 인자는 바꿔주는 함수, useState내부의 값은 기본값
  const [number, setNumber] = useState(0);

  //원래라면
  //const numberState = useState(0);
  //const number = numberState[0];
  //const setNumber = numberState[1];
  //이런 식으로 적어야 하지만 배열 비구조화 할당을 통해 간소화

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
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
