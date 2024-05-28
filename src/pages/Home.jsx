import React, { useState, useEffect } from 'react';
import Calendar from '../Components/Calendar';
import List from '../Components/List';
import Layout from '../Components/Layout';
import Form from '../Components/Form';
import data from '../FakeData'; // 데이터가 정의된 파일에서 가져오기
import { useNavigate } from 'react-router-dom';

function Home() {
  const [newData, setNewData] = useState(data);
  const [clickedMonthBtn, setClickedMonthBtn] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate(); // 추가된 부분

  const addData = (newInput) => {
    const updatedData = [...newData, newInput];
    setNewData(updatedData);
    console.log('Updated data array:', updatedData); // 배열이 어떻게 바뀌었는지 콘솔에 찍기
  };

  const handleItemSelect = (id) => {
    const item = newData.find(item => item.id === id);
    setSelectedItem(item);
    navigate('/detail', { state: { item } });
  };

  const handleItemUpdate = (updatedItem) => {
    setNewData(newData.map(item => item.id === updatedItem.id ? updatedItem : item));
    setSelectedItem(null);
    navigate('/');
  };

  const handleItemDelete = (id) => { // 추가된 함수
    setNewData(newData.filter(item => item.id !== id));
    setSelectedItem(null);
    navigate('/');
  };

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
      <List clickedMonthBtn={clickedMonthBtn} data={newData} onItemSelect={handleItemSelect} />
    </Layout>
  );
}

export default Home;
