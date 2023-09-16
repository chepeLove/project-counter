import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    user-select: none;
    background: linear-gradient(180deg, #bdf5dc -31.11%, rgba(22, 11, 36, 0.65) 132.36%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }


`

