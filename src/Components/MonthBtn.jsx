import styled from 'styled-components';

const StyledMonthBtn = styled.button`
  background-color: ${(props) => (props.$active ? "blue" : "white")};
  border-radius: 10px;
  font-size: 30px;
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

function MonthBtn({ clickedMonthBtn, handleClick }) {
  const months = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월'
  ];

  return (
    <>
      {months.map((month, index) => (
        <StyledMonthBtn
          key={index}
          $active={index === clickedMonthBtn}
          onClick={() => handleClick(index)}
        >
          {month}
        </StyledMonthBtn>
      ))}
    </>
  );
}

export default MonthBtn;
