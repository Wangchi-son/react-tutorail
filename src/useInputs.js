import { useState, useCallback } from 'react';

//커스텀 Hook을 만들 때 이름에는 use{구현하고자 하는 기능 이름}으로 제작
function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;
