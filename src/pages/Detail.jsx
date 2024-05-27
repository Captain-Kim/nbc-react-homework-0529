import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f4f8;
  padding: 40px;
  border-radius: 10px;
  max-width: 1200px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:nth-child(1) {
    background-color: #2196f3;
    color: white;

    &:hover {
      background-color: #1976d2;
    }
  }

  &:nth-child(2) {
    background-color: #f44336;
    color: white;

    &:hover {
      background-color: #d32f2f;
    }
  }

  &:nth-child(3) {
    background-color: #9e9e9e;
    color: white;

    &:hover {
      background-color: #757575;
    }
  }
`;

const Detail = () => {
  return (
    <Container>
      <FormGroup>
        <Label>날짜</Label>
        <Input type="date" defaultValue="2024-02-02" />
      </FormGroup>
      <FormGroup>
        <Label>항목</Label>
        <Input type="text" defaultValue="식비" />
      </FormGroup>
      <FormGroup>
        <Label>금액</Label>
        <Input type="number" defaultValue="50000" />
      </FormGroup>
      <FormGroup>
        <Label>내용</Label>
        <Input type="text" defaultValue="회식" />
      </FormGroup>
      <ButtonGroup>
        <Button>수정</Button>
        <Button>삭제</Button>
        <Button>뒤로 가기</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Detail;
