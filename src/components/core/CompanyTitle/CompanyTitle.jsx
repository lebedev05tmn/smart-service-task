import PropTypes from "prop-types";
import Logo from "../../ui/Logo/Logo";
import CompanyText from "../../ui/CompanyText/CompanyText";
import useMedia from "../../../hooks/useMedia";
import { MEDIA_DESKTOP } from "../../../shared/config";
import { Container } from "./style";

const CompanyTitle = ({ image, title, description }) => {
  const media = useMedia(
    MEDIA_DESKTOP,
    {
      Logo: <Logo image={image} size="162px" />,
      Text: <CompanyText title={title} description={description} />,
    },
    ""
  );
  return (
    <Container id="title">
      {media.Logo}
      {media.Text}
    </Container>
  );
};

CompanyTitle.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CompanyTitle;
