import React, { useState, useRef } from 'react';

function InputSample() {
  // 현재 inputs = [name, nickname]
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = (e) => {
    // e.target에서 name, value 값을 추출하고
    const { name, value } = e.target;

    // ...inputs내의 name이나 nickname을 바꾸겠다 (여기서 [name]은 input 내의 name을 의미함)
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    // current = document
    nameInput.current.focus();
  };

  return (
    <div>
      <input name="name" placeholder="이름: " onChange={onChange} value={name} ref={nameInput} />
      <input name="nickname" placeholder="닉네임: " onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
