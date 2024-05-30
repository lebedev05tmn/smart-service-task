import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  margin-top: 16px;
  text-transform: uppercase;
  border: none;
  background-color: ${({ theme }) => theme.baseBlack};
  color: ${({ theme }) => theme.baseWhite};
  font-weight: 700;
  padding: 18px 0;
  border-radius: 8.11px;
  cursor: pointer;
  font-size: 12px;
  line-height: 15.76px;

  &:hover,
  &:focus {
    opacity: 0.6;
  }
  &:active {
    background-color: ${({ theme }) => theme.bspanColor};
  }
`;
