import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { color } from "./variables";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    list-style: none;
    text-decoration:none;
  }
  a{
    /* color:${color.black}; */
    color: inherit;
  }

`;

export default GlobalStyles;
