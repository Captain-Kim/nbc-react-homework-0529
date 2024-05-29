import React, { useRef, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DataContext } from '../DataContext';

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
  
  // 사용자가 아이템을 수정버튼을 눌러서 값을 바꾸어서 원본 배열에 넘기는 함수와
  // 사용자가 삭제 버튼을 눌러서 아이템을 원본 배열에서 삭제시키는 함수를 context 컴포넌트에서 불러옴. 
  const { handleItemUpdate, handleItemDelete } = useContext(DataContext);

  // useNavigate 훅에서 넘겨 받은 {state : { item이 지금 무엇인지 }} 를 받아오기 위해
  // useLocation 훅을 사용하겠다고 선언함.
  const location = useLocation();
  const { item } = location.state;

  // 다시 Home 컴포넌트로 이동시키기 위해 useNavigate 훅을 사용하겠다고 선언함.
  const navigate = useNavigate();

  // input 태그에 ref 속성으로 붙일 id를 부여하는 개념이다.
  const dateRef = useRef();
  const itemRef = useRef();
  const amountRef = useRef();
  const descriptionRef = useRef();

  // Home 컴포넌트에서 넘어온 item 값이 있다면,
  // 각 입력 필드의 현재 입력되고 있는 값을 item의 각 프로퍼티를 찾아서 교체해준다.
  // 그런데 이것은 useEffect 훅을 사용해서 Home에서 넘겨주는 item의 내용이
  // 바뀔 때에만 위에서 useRef로 선택한 DOM, 즉 입력 필드에다가 내용을 채워 넣어주는 코드임.
  useEffect(() => {
    if (item) {
      dateRef.current.value = item.date;
      itemRef.current.value = item.item;
      amountRef.current.value = item.amount;
      descriptionRef.current.value = item.description;
    }
  }, [item]);

  // 수정 버튼에 달릴 함수임.
  // 각 입력 필드에 입력된 값을 가져와서 date, item 등 item의 각 프로퍼티에 매칭시켜 주고
  // spread 연산자로 ...item을 한 이유는, item은 {객체}이기 때문에 두번째 매개변수로 오는 값들은
  // 원본 [배열]에서 값을 추가하는 개념이 아니라 프로퍼티가 겹치는 것을 덮어 씌우는 개념이다.
  // 즉 여기서 두번째 매개 변수로 전달하지 않은 프로퍼티는 id 밖에 없고, id를 제외하고 나머지 프로퍼티는
  // 덮어 씌워서 updatedItem이라는 새로운 객체로 반환하고
  // 이를 handleItemUpdate의 매개 변수로 전달함.
  // handleItemUpdate 함수는 원본 배열 newData에서 각각의 item이 갖고 있는 id와
  // detail 페이지에서 넘겨준 update된 아이템의 id가 일치하면 그 일치하는 item만 교체해주는 것이
  // handleItemUpdate 함수의 내용임.
  // 종료되면 다시 Home 컴포넌트로 이동시킴.
  const handleUpdate = () => {
    const updatedItem = {
      ...item,
      date: dateRef.current.value,
      item: itemRef.current.value,
      amount: parseInt(amountRef.current.value, 10),
      description: descriptionRef.current.value
    };
    handleItemUpdate(updatedItem);
    navigate('/');
  };

  // 마찬가지로 삭제버튼을 누른 현재 detail 페이지의 이 id를 원본 데이터 배열 newData에서
  // 검사하여 제외시키는 함수를 정의함.
  const handleDelete = () => {
    handleItemDelete(item.id);
    navigate('/');
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
        {/* -1은 뒤로가기, "/" 이 주소로 이동시키는 것. 페이지가 두 개라
        똑같은 결과겠지만, 의도하는 목적에 맞게 사용하는 것이 중요. */}
        <Button onClick={() => navigate(-1)}>뒤로 가기</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Detail;
