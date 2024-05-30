import styled from "styled-components";
import { StyledMain } from "../../styled/StyledMain/StyledMain";

export const CompanyMain = styled(StyledMain)`
  padding-top: 84px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 84px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.baseBlack};
  }
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: flex-start;

  ${({ theme }) => theme.mediaDesktop} {
    padding: 0 8px 146px 32px;
    gap: 35px;
  }
`;
