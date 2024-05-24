import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    max-width: 1200px;
    min-width: 800px;
    background-color: skyblue;
  }

  #root {
    margin: 30 auto;
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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
