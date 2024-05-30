import React, { useContext, useEffect } from 'react';
import { DataContext } from '../DataContext';
import Calendar from '../Components/Calendar';
import List from '../Components/List';
import Layout from '../Components/Layout';
import Form from '../Components/Form';
import { useNavigate } from 'react-router-dom';

function Home() {
  
  // 상태와 함수를 DataContext라는 Context 컴포넌트를 만들어서 관리함.
  // 별도로 정의한 DataContext를 사용하겠다고 선언함.
  // 그 중에서도 중괄호 안에 있는 상태나 변수들을 사용할 것임.
  const {
    newData,
    clickedMonthBtn,
    // handleItemSelect,
    // addData,
    // handleClick,
  } = useContext(DataContext);
  
  // react-router-dom의 기능으로, 페이지를 이동시켜주는 navigate 훅을 사용하겠다고 선언함.
  const navigate = useNavigate();

  // 사용자가 클릭한 가계부 아이템을 item이라는 변수에 담아 detail 페이지로 넘기는 것이고 handleSelect 함수를 선언하는데 매개 변수로
  // 클릭한 아이템의 id를 받는다.
  // 그리고 이 과정이 완료되면 detail 페이지로 이동시키고,
  // navigate 훅의 두번째 매개 변수로 { state : { 자바스크립트 표현식(여기서는 객체) } } 형태로 detail 페이지로 정보를 넘김.
  const handleSelect = (id) => {
    // handleItemSelect(id);
    navigate('/detail', { state: { item: newData.find(item => item.id === id) } });
  };

  // useEffect 훅을 통해서 clickedMonthBtn이라는 상태에 값이 있으면, 즉 사용자가 버튼을 눌러서
  // 무언가로 값이 변경되면, 로컬스토리지에 현재 clickedMonthBtn을 할당해주고
  // 값이 없으면 패스함.
  // 그런데 이것을 useEffect 훅으로 관리하는 이유는 clickedMonthBtn의 값이 변경될 때만 로컬스토리지에 할당하는 작업을
  // 하면 되기 때문임. 이렇게 안 하면 다른 컴s포넌트가 리렌더링 될 때마다 할당 작업을 반복함.
  useEffect(() => {
    if (clickedMonthBtn !== null) {
      localStorage.setItem('selectedMonth', clickedMonthBtn);
    }
  }, [clickedMonthBtn]);

  return (
    <Layout>
      <Form/>
      <Calendar/>
      <List handleSelect={handleSelect} />
    </Layout>
  );
}

export default Home;
