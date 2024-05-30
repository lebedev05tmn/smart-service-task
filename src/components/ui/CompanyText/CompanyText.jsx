import PropTypes from "prop-types";
import { StyledTitle, StyledDesciription, StyledDiv } from "./style";

const CompanyText = ({ title, description }) => {
  return (
    <StyledDiv>
      <StyledTitle>{title}</StyledTitle>
      <StyledDesciription>{description}</StyledDesciription>
    </StyledDiv>
  );
};

CompanyText.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CompanyText;
