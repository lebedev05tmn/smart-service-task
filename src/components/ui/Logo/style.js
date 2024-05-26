import styled from "styled-components";

export const Container = ({ width }) => {
  const block = styled.div`
    width: ${width || "100%"};
    display: flex;
    justify-content: center;
    padding: 27px 0;
    ${props => props.theme.mediaDesktop} {
      padding: 0;
    }
  `;
  return block;
};
