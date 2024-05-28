import React, { createContext, useState } from 'react';
import data from './FakeData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [newData, setNewData] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  const [clickedMonthBtn, setClickedMonthBtn] = useState(null);

  const handleItemSelect = (id) => {
    const item = newData.find(item => item.id === id);
    setSelectedItem(item);
  };

  const handleItemUpdate = (updatedItem) => {
    setNewData(newData.map(item => item.id === updatedItem.id ? updatedItem : item));
    setSelectedItem(null);
  };

  const handleItemDelete = (id) => {
    setNewData(newData.filter(item => item.id !== id));
    setSelectedItem(null);
  };

  const addData = (newInput) => {
    const updatedData = [...newData, newInput];
    setNewData(updatedData);
  };

  const handleClick = (month) => {
    setClickedMonthBtn(month);
  };

  return (
    <DataContext.Provider
      value={{
        newData,
        selectedItem,
        clickedMonthBtn,
        handleItemSelect,
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
