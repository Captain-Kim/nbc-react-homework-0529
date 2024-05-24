import styled from "styled-components";

const MainDiv = styled.div`
    text-align: center;
    margin: 30px auto;
`;

function Layout({ children }) {

    return (
        <MainDiv>{children}</MainDiv>
    );
}

export default Layout;