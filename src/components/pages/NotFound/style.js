import styled from "styled-components";

export const StyledBlock = styled.main`
  color: ${({ theme }) => theme.baseBlack};
  width: 100%;
  text-align: center;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 30px;

  ${({ theme }) => theme.mediaDesktop} {
    color: white;
  }
`;
