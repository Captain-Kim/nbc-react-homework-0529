import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    max-width: 100%;
    min-width: 800px;
    background-color: skyblue;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    margin: 30px auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @font-face {
    font-family: 'AppleSDGothicNeoB';
    src: url('/fonts/AppleSDGothicNeoB.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'AppleSDGothicNeoH';
    src: url('/fonts/AppleSDGothicNeoH.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  body {
    font-family: 'AppleSDGothicNeoB', sans-serif;
  }
`;

export default GlobalStyle;
