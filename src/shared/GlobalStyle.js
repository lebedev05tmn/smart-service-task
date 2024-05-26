import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'TT Firs Neue';
  box-sizing: border-box;
  width: 100%;
}
body {
  background-color: ${({ theme }) => theme.mobileBackground};
  
  ${({ theme }) => theme.mediaDesktop} {
    background-color: ${({ theme }) => theme.backgroundBlack};
  }
}

#root {
  display: flex;
  flex-direction: column;
  align-items: center;
}`;
