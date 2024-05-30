import PropTypes from "prop-types";
import { StyledText, StyledSpan, StyledTitle } from "./style";

const AboutText = ({ name, position }) => (
  <StyledText>
    <StyledTitle>
      {name.split(" ")[0]}
      <br />
      {name.split(" ").slice(1).join(" ")}
    </StyledTitle>
    <StyledSpan>{position}</StyledSpan>
  </StyledText>
);

AboutText.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default AboutText;
