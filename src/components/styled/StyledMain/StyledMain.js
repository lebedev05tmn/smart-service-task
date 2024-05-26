import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 32px 0;
  display: block;
  background-color: ${({ theme }) => theme.mobileMainBackground};
  width: 343px;
  height: auto;
  border-radius: 8px;

  ${({ theme }) => theme.mediaDesktop} {
    width: 648px;
    background-color: ${({ theme }) => theme.backgroundWhite};
  }
`;
