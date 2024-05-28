import React, { useState, useEffect } from 'react';
import Calendar from '../Components/Calendar';
import List from '../Components/List';
import Layout from '../Components/Layout';
import Form from '../Components/Form';

function Home({ data, onItemSelect, addData, clickedMonthBtn, handleClick }) {
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    const savedMonth = localStorage.getItem('selectedMonth');
    if (savedMonth !== null) {
      setClickedMonthBtn(parseInt(savedMonth, 10));
    }
  }, []);

  useEffect(() => {
    if (clickedMonthBtn !== null) {
      localStorage.setItem('selectedMonth', clickedMonthBtn);
    }
  }, [clickedMonthBtn]);

  return (
    <Layout>
      <Form addData={addData} />
      <Calendar clickedMonthBtn={clickedMonthBtn} handleClick={handleClick} />
      <List clickedMonthBtn={clickedMonthBtn} data={newData} onItemSelect={onItemSelect} />
    </Layout>
  );
}

export default Home;
