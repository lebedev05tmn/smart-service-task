import styled from "styled-components";

export const Container = styled.section`
  display: none;
  ${({ theme }) => theme.mediaDesktop} {
    align-items: start;
    width: 100%;
    padding-top: 26px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;
