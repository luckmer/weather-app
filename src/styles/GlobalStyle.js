import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif;
    }
    html,body{
        background-color:#EFF2F9;
        width: 100%;
        height: 100%;
    }
    #root{
        width:100vw;
        height: 100vh;
    }
`;
export default GlobalStyle;