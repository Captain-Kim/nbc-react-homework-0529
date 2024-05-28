// Home.jsx
import React, { useContext, useEffect } from 'react';
import { DataContext } from '../DataContext';
import Calendar from '../Components/Calendar';
import List from '../Components/List';
import Layout from '../Components/Layout';
import Form from '../Components/Form';
import { useNavigate } from 'react-router-dom';

function Home() {
  const {
    newData,
    clickedMonthBtn,
    handleItemSelect,
    addData,
    handleClick,
    setClickedMonthBtn,
  } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    handleItemSelect(id);
    navigate('/detail', { state: { item: newData.find(item => item.id === id) } });
  };

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
      <List clickedMonthBtn={clickedMonthBtn} data={newData} onItemSelect={handleSelect} />
    </Layout>
  );
}

export default Home;
