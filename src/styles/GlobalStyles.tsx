import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { bgColor, color } from "./variables";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    list-style: none;
    text-decoration:none;
    box-sizing:border-box;
  }
  body{
    background-color:${bgColor.lightGray};
    min-height: 100vh;
  }
  a{
    /* color:${color.black}; */
    color: inherit;
  }

`;

export default GlobalStyles;
