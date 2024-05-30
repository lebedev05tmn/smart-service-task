import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledButtons = styled.div`
  position: relative;
  top: -39px;
  z-index: 5;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 343px;
  gap: 13px;
`;
