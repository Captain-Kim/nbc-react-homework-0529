import styled from 'styled-components';

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 상단에 맞춤 */
  height: 100vh;
  width: 100%;
`;

function Layout({ children }) {
  return <MainDiv>{children}</MainDiv>;
}

export default Layout;
