import React, { useState } from 'react';
import Calendar from '../Components/Calendar';
import List from '../Components/List';
import Layout from '../Components/Layout';
import FormSection from '../Components/Form';

function Home() {
  const [clickedMonthBtn, setClickedMonthBtn] = useState(null);

  const handleClick = (month) => {
    setClickedMonthBtn(month);
  };

  return (
    <Layout>
      <FormSection />
      <Calendar clickedMonthBtn={clickedMonthBtn} handleClick={handleClick} />
      <List month={clickedMonthBtn} />
    </Layout>
  );
}

export default Home;
