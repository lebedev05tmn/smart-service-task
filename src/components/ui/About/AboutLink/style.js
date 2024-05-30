import styled from "styled-components";

export const StyledLi = styled.li`
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
`;

export const StyledA = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.baseBlack};
  text-decoration: none;
  gap: 12px;

  &:hover,
  &:focus {
    color: blue;
  }

  &:active {
    color: purple;
    opacity: 0.7;
  }
`;
