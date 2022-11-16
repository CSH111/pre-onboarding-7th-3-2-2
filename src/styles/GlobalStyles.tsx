import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import variables from "./variables";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    list-style: none;
    text-decoration:none;
  }
  a{
    color:${variables.color.default}
  }

`;

export default GlobalStyles;
