import styled from 'styled-components';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
  // background-color: #ffffff;
  // border-radius: 10px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
`;

function Layout({ children }) {
  return <MainDiv>{children}</MainDiv>;
}

export default Layout;
