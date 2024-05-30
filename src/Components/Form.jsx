import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { createBook } from '../redux/slice/slice';
import { useDispatch } from 'react-redux';

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

  const dispatch = useDispatch();

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

    const newInput = {
      id: uuidv4(),
      date,
      item,
      amount: parseInt(amount),
      description,
    };
    console.log('사용자가 새로 추가한 값:', newInput);
    dispatch(createBook(newInput));

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