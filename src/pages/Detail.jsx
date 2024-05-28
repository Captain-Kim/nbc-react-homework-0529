import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

const Detail = ({ onItemUpdate, onItemDelete }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state;

  const dateRef = useRef();
  const itemRef = useRef();
  const amountRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    if (item) {
      dateRef.current.value = item.date;
      itemRef.current.value = item.item;
      amountRef.current.value = item.amount;
      descriptionRef.current.value = item.description;
    }
  }, [item]);

  const handleUpdate = () => {
    const updatedItem = {
      ...item,
      date: dateRef.current.value,
      item: itemRef.current.value,
      amount: parseInt(amountRef.current.value, 10),
      description: descriptionRef.current.value
    };
    onItemUpdate(updatedItem);
  };

  const handleDelete = () => {
    onItemDelete(item.id);
  };

  return (
    <Container>
      <FormGroup>
        <Label>날짜</Label>
        <Input type="date" ref={dateRef} />
      </FormGroup>
      <FormGroup>
        <Label>항목</Label>
        <Input type="text" ref={itemRef} />
      </FormGroup>
      <FormGroup>
        <Label>금액</Label>
        <Input type="number" ref={amountRef} />
      </FormGroup>
      <FormGroup>
        <Label>내용</Label>
        <Input type="text" ref={descriptionRef} />
      </FormGroup>
      <ButtonGroup>
        <Button onClick={handleUpdate}>수정</Button>
        <Button onClick={handleDelete}>삭제</Button>
        <Button onClick={() => navigate(-1)}>뒤로 가기</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Detail;
