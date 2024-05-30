import styled from "styled-components";

export const StyledLinks = styled.ul`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 31px;
  list-style: none;
  position: relative;
  padding: 24px 22px 40px 20px;

  ${({ theme }) => theme.mediaDesktop} {
    display: flex;
    justify-content: space-between;
    padding: 24px 32px 32px;
  }

  &::before {
    content: "";
    width: 100%-32px;
    height: 1px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-left: inherit;
    padding-right: inherit;
    background-color: ${({ theme }) => theme.baseBlack};
  }
`;
