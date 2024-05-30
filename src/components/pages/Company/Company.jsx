import useMedia from "../../../hooks/useMedia";
import { MEDIA_DESKTOP } from "../../../shared/config";
import Navigation from "../../core/Navigation/Navigation";
import Links from "../../core/Links/Links";
import { StyledSection, CompanyMain } from "./style";
import mockData from "../../../mocks/mockData";
import AboutCompany from "../../core/AboutCompany/AboutCompany";
import CompanyTitle from "../../core/CompanyTitle/CompanyTitle";
import CompanyText from "../../ui/CompanyText/CompanyText";
import PropTypes from "prop-types";

const Company = ({ as }) => {
  const { company } = mockData;
  const {
    links,
    logo,
    name,
    description,
    main_number,
    mail,
    site,
    address,
    date,
    clients,
    fax,
  } = company;

  const media = useMedia(
    MEDIA_DESKTOP,
    { Navigation: <Navigation isMain={false} /> },
    { Text: <CompanyText title={name} description={description} /> }
  );
  return (
    <>
      {media.Navigation}
      <CompanyMain as={as} id="company">
        {media.Text}
        <StyledSection id="info">
          <CompanyTitle image={logo} title={name} description={description} />
          <AboutCompany
            info={{
              main_number,
              mail,
              site,
              address,
              date,
              clients,
              fax,
            }}
          />
        </StyledSection>

        <Links links={links} />
      </CompanyMain>
    </>
  );
};

Company.propTypes = {
  as: PropTypes.string,
};

export default Company;
