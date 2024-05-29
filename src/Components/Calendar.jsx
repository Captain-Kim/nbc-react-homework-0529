import styled from 'styled-components';
import MonthBtn from './MonthBtn';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

const MonthBtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  max-width: 1200px;
  background-color: #f0f4f8;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  justify-items: center;
  align-items: center;
  margin: 20px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function Calendar() {

  return (
    <MonthBtnContainer>
      <MonthBtn />
    </MonthBtnContainer>
  );
}

export default Calendar;
