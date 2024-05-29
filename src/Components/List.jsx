import React, { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '../DataContext';

const ListArea = styled.div`
  padding: 10px;
  background-color: #f0f4f8;
  border-radius: 10px;
  width: 1200px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 5px 0;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Date = styled.span`
  flex: 1;
`;

const Category = styled.span`
  flex: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Amount = styled.span`
  flex: 1;
  text-align: right;
`;

const List = ({handleSelect}) => {

  const { clickedMonthBtn, newData } = useContext(DataContext);

  const filteredData = clickedMonthBtn === null ? newData : newData.filter(item => {
    const [, mm] = item.date.split('-');
    return parseInt(mm) === clickedMonthBtn + 1;
  });

  return (
    <ListArea>
      {filteredData.map(item => (
        <ListItem key={item.id} onClick={() => {
          console.log("현재 클릭한 아이템:", item);
          handleSelect(item.id);
        }}>
          <Date>{item.date}</Date>
          <Category>{item.item} - {item.description}</Category>
          <Amount>{item.amount.toLocaleString()} 원</Amount>
        </ListItem>
      ))}
    </ListArea>
  );
};

export default List;
