import React, { useState, useEffect } from 'react';
import Calendar from '../Components/Calendar';
import List from '../Components/List';
import Layout from '../Components/Layout';
import Form from '../Components/Form';
import data from '../FakeData'; // 데이터가 정의된 파일에서 가져오기

function Home() {
  const [newData, setNewData] = useState(data);

  const addData = (newInput) => {
    const updatedData = [...newData, newInput];
    setNewData(updatedData);
    console.log('Updated data array:', updatedData); // 배열이 어떻게 바뀌었는지 콘솔에 찍기
  };

  const [clickedMonthBtn, setClickedMonthBtn] = useState(null);

  // 컴포넌트가 처음 렌더링될 때 로컬 스토리지에서 값을 불러옴
  useEffect(() => {
    const savedMonth = localStorage.getItem('selectedMonth');
    if (savedMonth !== null) {
      setClickedMonthBtn(parseInt(savedMonth, 10));
    }
  }, []);

  // clickedMonthBtn 상태가 변경될 때 로컬 스토리지에 저장
  useEffect(() => {
    if (clickedMonthBtn !== null) {
      localStorage.setItem('selectedMonth', clickedMonthBtn);
    }
  }, [clickedMonthBtn]);

  const handleClick = (month) => {
    setClickedMonthBtn(month);
  };

  return (
    <Layout>
      <Form addData={addData} />
      <Calendar clickedMonthBtn={clickedMonthBtn} handleClick={handleClick} />
      <List clickedMonthBtn={clickedMonthBtn} data={newData} />
    </Layout>
  );
}

export default Home;