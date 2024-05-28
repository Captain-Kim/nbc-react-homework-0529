import React, { useContext, useEffect } from 'react';
import { DataContext } from '../DataContext';
import Calendar from '../Components/Calendar';
import List from '../Components/List';
import Layout from '../Components/Layout';
import Form from '../Components/Form';

function Home() {
  const {
    newData,
    clickedMonthBtn,
    handleItemSelect,
    addData,
    handleClick,
    setClickedMonthBtn,
  } = useContext(DataContext);

  useEffect(() => {
    const savedMonth = localStorage.getItem('selectedMonth');
    if (savedMonth !== null) {
      setClickedMonthBtn(parseInt(savedMonth, 10));
    }
  }, [setClickedMonthBtn]);

  useEffect(() => {
    if (clickedMonthBtn !== null) {
      localStorage.setItem('selectedMonth', clickedMonthBtn);
    }
  }, [clickedMonthBtn]);

  return (
    <Layout>
      <Form addData={addData} />
      <Calendar clickedMonthBtn={clickedMonthBtn} handleClick={handleClick} />
      <List clickedMonthBtn={clickedMonthBtn} data={newData} onItemSelect={handleItemSelect} />
    </Layout>
  );
}

export default Home;
