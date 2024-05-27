import styled from 'styled-components';

const MainDiv = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: flex-start;
  // height: 100vh;
  // width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  width: 1200px;
`;

function Layout({ children }) {
  return <MainDiv>{children}</MainDiv>;
}

export default Layout;
