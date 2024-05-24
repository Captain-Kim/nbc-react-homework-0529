import styled from 'styled-components';
import MonthBtn from './MonthBtn';

const MonthBtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  width: 1200px;
  height: 200px;
  background-color: pink;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
`;

function Calendar({ clickedMonthBtn, handleClick }) {
  return (
    <MonthBtnContainer>
      <MonthBtn clickedMonthBtn={clickedMonthBtn} handleClick={handleClick} />
    </MonthBtnContainer>
  );
}

export default Calendar;
