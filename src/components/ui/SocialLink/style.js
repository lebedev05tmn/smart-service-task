import styled from "styled-components";

export const StyledLogo = styled.img`
  background-color: transparent;
  width: 26px;
  height: 26px;
  ${props => props.theme.mediaDesktop} {
    width: 12px;
    height: 12px;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: ${props => props.theme.baseBlack};
  border-radius: 50%;
  ${props => props.theme.mediaDesktop} {
    width: 24px;
    height: 24px;
  }
`;
