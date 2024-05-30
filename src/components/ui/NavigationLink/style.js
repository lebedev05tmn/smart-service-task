import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.baseWhite};
  text-decoration: none;
`;

export const OpacityStyledLink = styled(StyledLink)`
  opacity: 0.5;
`;

export const StyledImage = styled.img`
  width: 16px;
  height: 11px;
  margin-right: 10px;
`;

export const ReversedStyledImage = styled(StyledImage)`
  transform: rotate(180deg);
  margin: 0;
  margin-left: 10px;
`;
