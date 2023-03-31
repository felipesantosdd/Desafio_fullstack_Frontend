import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    min-height: 100vh;
    background-color: #393D5E;
    color: #e1e1e6;
    display: flex;;
    justify-content: center;
    align-items: center;
}
`
