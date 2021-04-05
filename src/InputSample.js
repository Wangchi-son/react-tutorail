import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');
  // 여기서 (e)는 컴포넌트 내에서 수정 이벤트가 발생했을 때 이벤트에 대한 내용이 이벤트 객체에 파라미터로 받아와서 사용
  // e.target은 현재 이벤트가 발생한 곳에대한 정보
  // e.target.value는 현재 이벤트가 발생한 곳의 값
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button>초기화</button>
      <div>
        <b>값: </b>
        {text}
      </div>
    </div>
  );
}

export default InputSample;
