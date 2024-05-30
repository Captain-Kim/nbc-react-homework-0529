import React, { createContext, useState } from 'react';
import data from './FakeData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [newData, setNewData] = useState(data);
  // const [selectedItem, setSelectedItem] = useState(null);
  const [clickedMonthBtn, setClickedMonthBtn] = useState(() => {
    const savedMonth = localStorage.getItem('selectedMonth');
    return savedMonth !== null ? parseInt(savedMonth, 10) : null;
  });

  // const handleItemSelect = (id) => {
  //   const item = newData.find(item => item.id === id);
  //   setSelectedItem(item);
  // };

  const handleItemUpdate = (updatedItem) => {
    setNewData(newData.map(item => item.id === updatedItem.id ? updatedItem : item));
    // setSelectedItem(null);
  };

  const handleItemDelete = (id) => {
    setNewData(newData.filter(item => item.id !== id));
    // setSelectedItem(null);
  };

  const addData = (newInput) => {
    const updatedData = [...newData, newInput];
    setNewData(updatedData);
  };

  // 지금은 함수가 1줄이라 wrapping 개념이지만, 추후 이벤트 핸들러에서
  // alert 등 여러 개 추가될 수 있으니, 확장성이나 유지보수 면에서 함수의 기능을 구분해주는 것이
  // 좋아서 이렇게 함.
  const handleClick = (month) => {
    setClickedMonthBtn(month);
  };

  return (
    <DataContext.Provider
      value={{
        newData,
        // selectedItem,
        clickedMonthBtn,
        // handleItemSelect,
        handleItemUpdate,
        handleItemDelete,
        addData,
        handleClick,
        setClickedMonthBtn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
