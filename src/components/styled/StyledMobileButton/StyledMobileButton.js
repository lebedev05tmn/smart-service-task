import styled from "styled-components";

export const StyledMobileButton = styled.button`
  border: none;
  font-size: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8.11px;
  color: #313131;
  font-weight: 700;
  text-decoration: none;
  background-color: ${({ theme }) => theme.baseWhite};
`;
