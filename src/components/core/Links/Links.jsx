import PropTypes from "prop-types";
import { StyledLi } from "./style";
import { StyledLinks } from "../../styled/StyledLinks/StyledLinks";
import SocialLink from "../../ui/SocialLink/SocialLink";

const Links = ({ links }) => {
  return (
    <StyledLinks as="section" id="links">
      {links.map(link => (
        <StyledLi key={link.id}>
          <SocialLink link={link.url} alt={link.title} image={link.image} />
        </StyledLi>
      ))}
    </StyledLinks>
  );
};

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default Links;
