import React, { useState, useEffect } from 'react';
import Calendar from '../Components/Calendar';
import List from '../Components/List';
import Layout from '../Components/Layout';
import FormSection from '../Components/Form';

function Home() {
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
      <FormSection />
      <Calendar clickedMonthBtn={clickedMonthBtn} handleClick={handleClick} />
      <List clickedMonthBtn={clickedMonthBtn} />
    </Layout>
  );
}

export default Home;
