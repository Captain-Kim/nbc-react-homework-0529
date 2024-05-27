import styled from 'styled-components';
import data from '../FakeData';

const ListArea = styled.div`
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 10px;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 10px 0;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0f7fa;
  }
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
};

export default List;
