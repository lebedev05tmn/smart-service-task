import PropTypes from "prop-types";
import { StyledUl, StyledLayout } from "../../styled/StyledAbout/style";
import AboutLink from "../../ui/About/AboutLink/AboutLink";

const AboutCompany = ({ info }) => {
  const { main_number, mail, site, address, date, clients, fax } = info;
  return (
    <StyledLayout as="section" id="about">
      <StyledUl>
        <AboutLink
          href={`tel:${main_number}`}
          image="https://svgshare.com/i/16XF.svg">
          {main_number}
        </AboutLink>
        <AboutLink
          href={`mailto:${mail}`}
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
        <AboutLink image="https://svgshare.com/i/16Wc.svg">
          {clients.map(client => (
            <p key={client.id}>{client.name}</p>
          ))}
        </AboutLink>
        <AboutLink
          href={`fax:${address}`}
          image="https://svgshare.com/i/16e8.svg">
          {fax}
        </AboutLink>
      </StyledUl>
    </StyledLayout>
  );
};

AboutCompany.propTypes = {
  info: PropTypes.shape({
    main_number: PropTypes.string,
    mail: PropTypes.string,
    site: PropTypes.string,
    address: PropTypes.string,
    date: PropTypes.string,
    clients: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, id: PropTypes.string })
    ),
    fax: PropTypes.string,
  }).isRequired,
};

export default AboutCompany;
