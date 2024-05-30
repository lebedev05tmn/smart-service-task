import PropTypes from "prop-types";
import Container from "./style";

const Logo = ({ image, size }) => {
  return (
    <Container size={size}>
      <img src={image} />
    </Container>
  );
};

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Logo;
