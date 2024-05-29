import React, { useContext } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { DataContext } from '../DataContext';

const InputArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: calc(20% - 10px);
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #1976d2;
  }
`;

const Form = () => {

  // context에서 정의한 addData 함수를 가져옴. 이 use 선언과 import도 동시에 해줘야 함.
  // addData 함수는 사용자가 입력필드에 입력한 값을 원본 데이터 배열 newData에 불변성을 유지하며 추가 하는 함수임.
  const { addData } = useContext(DataContext);

  // 각 입력 필드를 상태로 정의함.
  // 상태로 정의하는 이유는 입력필드에 value 속성을 주어 제어컴포넌트로 만들기 위함이고,
  // 제어컴포넌트로 만들려면 value에 들어갈 상태롤 만들어줘야 함.
  // 입력필드를 제어컴포넌트로 만들면 onChange 이벤트 핸들러를 통해 state의 값을 실시간으로
  // 다시 state로 넘겨주고, 또 그 state 값을 value에서 받아오는 작업을 리액트가 제어해줄 수 있음.
  const [date, setDate] = useState('');
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  // 논리합 연산자를 활용한 유효성 검사. 저장 버튼에 달림.
  const handleSubmit = () => {
    if (!date || !item || !amount || !description) {
      alert("입력한 내용을 확인해주세요.");
      return;
    }

    // newInput은 사용자가 입력 필드에 입력한 값을 원본 배열 newData에 밀어 넣어주기
    // 위한 값을 정의하는 것임. 이것은 addData 함수에 매개 변수로 전달될 것임.
    // id는 고유하게 만들기 위해 uuid 라이브러리를 사용함.
    // 금액(amount)은 입력 필드에 사용자가 숫자를 넣었다 하더라도 string으로 들어오기 때문에
    // 정수로 변환해줌.
    // 이 작업들이 끝나면 입력 필드를 비워줌.
    const newInput = {
      id: uuidv4(),
      date,
      item,
      amount: parseInt(amount),
      description,
    };
    console.log('사용자가 새로 추가한 값:', newInput);
    addData(newInput);

    setDate('');
    setItem('');
    setAmount('');
    setDescription('');
  };

  return (
    <InputArea>
      <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <Input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder="지출 항목" />
      <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="지출 금액" />
      <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="지출 내용" />
      <Button onClick={handleSubmit}>저장</Button>
    </InputArea>
  );
};

export default Form;