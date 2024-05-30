import { memo } from "react";
import mockData from "../../../mocks/mockData";
import { StyledMain } from "../../styled/StyledMain/StyledMain";
import Navigation from "../../core/Navigation/Navigation";
import { MEDIA_DESKTOP } from "../../../shared/config";
import useMedia from "../../../hooks/useMedia";
import Links from "../../core/Links/Links";
import Info from "../../core/Info/Info";
import Preview from "../../core/Preview/Preview";
import PropTypes from "prop-types";
import { StyledSection } from "./style";
import PreviewMobile from "../../core/PreviewMobile/PreviewMobile";

const Employer = ({ as }) => {
  const { employer } = mockData;
  const {
    links,
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
    images,
    logo,
  } = employer;

  const media = useMedia(
    MEDIA_DESKTOP,
    {
      Navigation: <Navigation isMain={true} />,
      Preview: (
        <Preview images={images} info={{ name, mail, site, main_number }} />
      ),
    },
    {
      PreviewMobile: (
        <PreviewMobile
          logo={logo}
          images={images}
          info={{ name, mail, site, main_number }}
        />
      ),
    }
  );

  return (
    <>
      {media.PreviewMobile}
      <StyledMain as={as} id="employer">
        <StyledSection id="info">
          {media.Preview}
          <Info
            logo={logo}
            info={{
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
            }}
          />
        </StyledSection>

        <Links links={links} />
      </StyledMain>
    </>
  );
};

Employer.propTypes = { as: PropTypes.string };

const MemoizedEmployer = memo(Employer);
export default MemoizedEmployer;
