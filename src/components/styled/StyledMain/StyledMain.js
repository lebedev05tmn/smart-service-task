import styled from "styled-components";

export const StyledMain = styled.main`
  display: block;
  background-color: ${({ theme }) => theme.baseWhite};
  width: 343px;
  height: auto;
  border-radius: 8px;

  ${({ theme }) => theme.mediaDesktop} {
    padding: 32px 0;
    width: 648px;
    background-color: ${({ theme }) => theme.backgroundWhite};
  }
`;
