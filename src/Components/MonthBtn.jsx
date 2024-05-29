import styled from 'styled-components';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

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

function MonthBtn() {

  // 사용자가 어떤 버튼을 눌렀는지 관리하는 상태를 가져오고, 그 상태의 값을 바꿔주는 handleClick 함수도 가져옴.
  // setClickedMonthBtn을 바로 가져오지 않은 이유는 handleClick 함수 정의한 context 컴포넌트에 기술함.
  const { clickedMonthBtn, handleClick } = useContext(DataContext);

  // 버튼을 여러 개 만들 것이기 때문에 map을 돌리는 것이 더 빠르고 간결하기도 하고
  // 그 다음 사용자가 몇번째 인덱스 버튼을 눌렀는지 감지해야 하기 때문에
  // 미리 배열로 만들 버튼을 정의해놓음.
  // 여러 개 반복되는 버튼을 만들 때는 이렇게 배열로 만들어 두는 것이 일반적인 패턴.
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
