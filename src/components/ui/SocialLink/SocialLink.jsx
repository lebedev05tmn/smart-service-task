import ProptTypes from "prop-types";
import { StyledLink, StyledLogo } from "./style";

const SocialLink = ({ link, image, alt }) => (
  <StyledLink href={link} target="_blank">
    <StyledLogo src={image} alt={alt} />
  </StyledLink>
);

SocialLink.propTypes = {
  link: ProptTypes.string.isRequired,
  image: ProptTypes.string.isRequired,
  alt: ProptTypes.string.isRequired,
};

export default SocialLink;
