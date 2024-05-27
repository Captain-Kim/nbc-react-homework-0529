import styled from 'styled-components';
import data from '../FakeData';

const ListArea = styled.div`
  padding: 10px;
  background-color: #e0f7fa;
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
`;

const Date = styled.span`
  flex: 1;
`;

const Category = styled.span`
  flex: 2;
  
  white-space: nowrap; // 텍스트를 한줄로 표현
  overflow: hidden; // 넘치는 텍스트를 숨김
  text-overflow: ellipsis; // 숨겨진 텍스트를 ... 으로 표현
`;

const Amount = styled.span`
  flex: 1;
  text-align: right;
`;

const List = () => {

    return (
      <ListArea>
        {data.map(item => (
          <ListItem key={item.id}>
            <Date>{item.date}</Date>
            <Category>{item.item} - {item.description}</Category>
            <Amount>{item.amount.toLocaleString()} 원</Amount>
          </ListItem>
        ))}
      </ListArea>
    );
}
    

export default List;