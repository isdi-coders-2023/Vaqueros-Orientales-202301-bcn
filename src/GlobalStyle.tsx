import { createGlobalStyle } from "styled-components";
import "../node_modules/@fontsource/montserrat-alternates/index.css";

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }

  html{
    font-size: 62.5%;
  }

  body{
    background-color: #FFFDFC;
    font-family: "Montserrat Alternates";
  }
  
  ol, ul {
    list-style: none;
  }

  button{
    border:none;
    font-family: inherit;
  }

  input{
    border:none;
    font-family:inherit;
  }
`;

export default GlobalStyle;
