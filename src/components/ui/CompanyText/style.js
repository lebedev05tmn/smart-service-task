import styled from "styled-components";

export const StyledDiv = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 5;
`;

export const StyledTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
`;

export const StyledDesciription = styled.p`
  color: ${({ theme }) => theme.spanColor};
  font-weight: 400;
  font-size: 14px;

  ${({ theme }) => theme.mdeiaDesktop} {
    color: ${({ theme }) => theme.baseBlack};
    font-weight: 700;
  }
`;
