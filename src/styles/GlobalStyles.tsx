import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { color } from "./variables";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    list-style: none;
    text-decoration:none;
    box-sizing:border-box;
  }
  a{
    /* color:${color.black}; */
    color: inherit;
  }

`;

export default GlobalStyles;
