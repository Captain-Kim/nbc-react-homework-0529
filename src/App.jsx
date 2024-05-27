import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { useState } from 'react';

function App() {
  const [clickedMonthBtn, setClickedMonthBtn] = useState(-1);

  const handleClick = (index) => {
    setClickedMonthBtn(index);
  };

  

  return (
    <Routes>
      <Route path="/" element={<Home clickedMonthBtn={clickedMonthBtn} handleClick={handleClick} />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;
