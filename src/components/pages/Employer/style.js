import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: flex-start;

  ${({ theme }) => theme.mediaDesktop} {
    padding: 0 8px 20px 32px;
  }
`;
