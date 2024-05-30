import styled from "styled-components";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  width: ${props => props.size || "100%"};
  display: flex;
  justify-content: center;
  padding: 27px 0;
  ${({ theme }) => theme.mediaDesktop} {
    padding: 0;
  }

  > img {
    height: auto;
  }
`;

const Container = ({ size, children }) => {
  return <StyledContainer size={size}>{children}</StyledContainer>;
};

Container.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
