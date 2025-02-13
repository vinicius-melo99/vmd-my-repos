import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: #0D2636;
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
    padding: 0 2%;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
