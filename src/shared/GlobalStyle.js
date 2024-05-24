import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, body {
  margin: 0;
  padding: 0;
  font-family: 'TT Firs Neue';
  box-sizing: border-box;
  background-color: ${props => props.theme.backgroundBlack};
}`;
