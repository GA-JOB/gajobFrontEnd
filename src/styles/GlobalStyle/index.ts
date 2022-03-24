import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Noto Sans KR', sans-serif;
  --footer-bg-color: #555555;
  --footer-text-color: #cccccc;
  --layout-padding: 8px 6px;
};

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
};`;

export default GlobalStyle;
