import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    user-select: none;
  }
  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
