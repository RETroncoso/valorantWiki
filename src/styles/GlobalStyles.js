import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #000;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #fa4454;
        border-radius: 10px;
    }

    body {
        background-color: #242424;
        color: antiquewhite;
        font-family: 'Poppins', sans-serif;
    }
    a {
        text-decoration: none;
    }
`;
