import React, { useState } from 'react';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import data from './FakeData'; // 데이터가 정의된 파일에서 가져오기

function AppContent() { // 이름 변경
  const [newData, setNewData] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  const [clickedMonthBtn, setClickedMonthBtn] = useState(null);

  const navigate = useNavigate();

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

  const handleItemDelete = (id) => {
    setNewData(newData.filter(item => item.id !== id));
    setSelectedItem(null);
    navigate('/');
  };

  const addData = (newInput) => {
    const updatedData = [...newData, newInput];
    setNewData(updatedData);
    console.log('Updated data array:', updatedData); // 배열이 어떻게 바뀌었는지 콘솔에 찍기
  };

  const handleClick = (month) => {
    setClickedMonthBtn(month);
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Home 
            data={newData} 
            onItemSelect={handleItemSelect} 
            addData={addData} 
            clickedMonthBtn={clickedMonthBtn} 
            handleClick={handleClick} 
          />
        } 
      />
      <Route 
        path="/detail" 
        element={
          <Detail 
            onItemUpdate={handleItemUpdate} 
            onItemDelete={handleItemDelete} 
          />
        } 
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
