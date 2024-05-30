import PropTypes from "prop-types";
import Logo from "../../ui/Logo/Logo";
import AboutEmployer from "../AboutEmployer/AboutEmployer";
import useMedia from "../../../hooks/useMedia";
import { MEDIA_DESKTOP } from "../../../shared/config";

const Info = ({ info, logo }) => {
  const media = useMedia(
    MEDIA_DESKTOP,
    {
      Logo: <Logo image={logo} size="281px" />,
    },
    ""
  );
  return (
    <section id="about">
      {media.Logo}
      <AboutEmployer info={info} />
    </section>
  );
};

Info.propTypes = {
  logo: PropTypes.string.isRequired,
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    main_number: PropTypes.string.isRequired,
    first_number: PropTypes.string.isRequired,
    second_number: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
  }),
};

export default Info;
