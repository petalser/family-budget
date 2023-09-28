import { createGlobalStyle } from "styled-components";
import vars from "./variables";
export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Kanit', sans-serif;
    color: ${vars.colors.textDefault}}

body {
    height: 100dvh;
    background-color: #000;
}
#root {
    display: flex;
    flex-direction: column;
    gap: ${vars.sizes.gap}
}

.rightside, .leftside {
    width: 100%;
}

@media screen and (min-width: 700px) {
    #root {
        flex-direction: row;
    }

    .rightside, .leftside {
    width: 50%;
}
}
`