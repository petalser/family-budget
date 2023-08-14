import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    font-family: 'Kanit', sans-serif;}

body {
    height: 100dvh;
    background-color: #333;
}

`