import { StyledLink, StyledLogo } from "./style";

const SocialLink = ({ link, image, alt }) => (
  <StyledLink href={link} target="_blank">
    <StyledLogo src={image} alt={alt} />
  </StyledLink>
);
export default SocialLink;
