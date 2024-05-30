import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 20px 14px 16px 20px;
  ${({ theme }) => theme.mediaDesktop} {
    padding: 24px 8px 0 24px;
    margin-top: 24px;
  }
`;
