import styled from 'styled-components';

const StyledMonthBtn = styled.button`
  background-color: ${(props) => (props.$active ? "#2196f3" : "white")};
  color: ${(props) => (props.$active ? "white" : "black")};
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$active ? "#1976d2" : "#e0f7fa")};
  }
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
