import AboutLink from "../../ui/About/AboutLink/AboutLink";
import AboutText from "../../ui/About/AboutText/AboutText";
import PropTypes from "prop-types";
import { StyledUl, StyledLayout } from "../../styled/StyledAbout/style";

const AboutEmployer = ({ info }) => {
  const {
    name,
    position,
    main_number,
    first_number,
    second_number,
    mail,
    site,
    address,
    date,
    grade,
  } = info;
  return (
    <StyledLayout as="article">
      <AboutText name={name} position={position} />
      <StyledUl>
        <AboutLink
          href={`tel:${main_number}`}
          image="https://svgshare.com/i/16XF.svg">
          {main_number}
        </AboutLink>
        <AboutLink
          href={`tel:${first_number}`}
          image="https://svgshare.com/i/16Wb.svg">
          {first_number}
        </AboutLink>
        <AboutLink
          href={`tel:${second_number}`}
          image="https://svgshare.com/i/16Wb.svg">
          {second_number}
        </AboutLink>
        <AboutLink
          href={`mailto:${mail}}`}
          image="https://svgshare.com/i/16VJ.svg">
          {mail}
        </AboutLink>
        <AboutLink href={site} image="https://svgshare.com/i/16Wj.svg">
          {site}
        </AboutLink>
        <AboutLink
          href={`https://2gis.ru/search/${address}`}
          image="https://svgshare.com/i/16Vr.svg">
          {address}
        </AboutLink>
        <AboutLink image="https://svgshare.com/i/16X3.svg">{date}</AboutLink>
        <AboutLink image="https://svgshare.com/i/16Wc.svg">{grade}</AboutLink>
      </StyledUl>
    </StyledLayout>
  );
};

AboutEmployer.propTypes = {
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

export default AboutEmployer;
