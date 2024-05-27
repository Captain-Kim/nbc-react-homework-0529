import React from 'react';
import styled from 'styled-components';

const InputArea = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #e0f7fa;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 1200px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1976d2;
  }
`;

const Form = () => {
  return (
    <InputArea>
      <Input type="date" placeholder="날짜" />
      <Input type="text" placeholder="지출 항목" />
      <Input type="number" placeholder="지출 금액" />
      <Input type="text" placeholder="지출 내용" />
      <Button>저장</Button>
    </InputArea>
  );
};

export default Form;
