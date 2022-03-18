import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Noto Sans KR', sans-serif;
  --footer-bg-color: #555555;
  --footer-text-color: #cccccc;
  --layout-padding: 8px 6px;
}
`;

export default GlobalStyle;
