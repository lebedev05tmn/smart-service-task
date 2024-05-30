import PropTypes from "prop-types";
import { StyledLi, StyledA } from "./style";

const AboutLink = ({ href, image, children }) => {
  const InfoComponent = () => (
    <>
      <img src={image} alt="icon" />
      <span>{children}</span>
    </>
  );
  return (
    <StyledLi>
      {href ? (
        <StyledA href={href} target="_blank">
          <InfoComponent />
        </StyledA>
      ) : (
        <InfoComponent />
      )}
    </StyledLi>
  );
};

AboutLink.propTypes = {
  href: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
};

export default AboutLink;
