import React, { useEffect } from 'react';
import Calendar from '../Components/Calendar';
import List from '../Components/List';
import Layout from '../Components/Layout';
import Form from '../Components/Form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {

  // const dispatch = useDispatch(); Home 컴포넌트에서는 useDispatch를 안 씀.
  const book = useSelector((state) => state.book.book);
  const month = useSelector((state) => state.book.month);
  
  const navigate = useNavigate();

  const handleSelect = (id) => {
    navigate('/detail', { state: { item: book.find(item => item.id === id) } });
  };

  useEffect(() => {
    if (month !== null) {
      localStorage.setItem('selectedMonth', month);
    }
  }, [month]);

  return (
    <Layout>
      <Form/>
      <Calendar/>
      <List handleSelect={handleSelect} />
    </Layout>
  );
}

export default Home;
