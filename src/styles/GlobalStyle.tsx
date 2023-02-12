import { createGlobalStyle } from "styled-components";
import "../../node_modules/@fontsource/montserrat-alternates/500.css";
import "../../node_modules/@fontsource/montserrat-alternates/700.css";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing:border-box;
    margin:0;
    padding:0;
  }

  html {
    font-size: 62.5%;
    font-weight: 500;
    font-family: "Montserrat Alternates";
    color: #333333;
  }

  body {
    background-color: #FFFDFC;
  }
  
  ol, ul {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    font-family: inherit;
  }

  input {
    border: none;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img{
    max-width: 100%;
  }
`;

export default GlobalStyle;
