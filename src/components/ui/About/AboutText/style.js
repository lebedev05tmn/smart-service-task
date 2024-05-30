import styled from "styled-components";

export const StyledText = styled.div`
  &::before {
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    background-color: ${({ theme }) => theme.baseBlack};
    width: 343px;
    top: 107px;
    left: 0;

    ${({ theme }) => theme.mediaDesktop} {
      content: "";
      display: block;
      height: 1px;
      position: absolute;
      background-color: ${({ theme }) => theme.baseBlack};
      width: 336px;
      top: 0;
      left: 0;
    }
  }
`;

export const StyledTitle = styled.h2`
  width: 268px;
  font-size: 20px;
  margin-bottom: 12px;
`;

export const StyledSpan = styled.span`
  display: inline-block;
  font-size: 14px;
  color: ${({ theme }) => theme.spanColor};
  margin-bottom: 28px;

  ${({ theme }) => theme.mediaDesktop} {
    margin-bottom: 22px;
  }
`;
