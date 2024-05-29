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

// max-width 등 컴포넌트의 공통적인 레이아웃 CSS를 자식들에게 모두 적용시킴.
function Layout({ children }) {
  return <MainDiv>{children}</MainDiv>;
}

export default Layout;
