import React from 'react';
import styled from 'styled-components';

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
