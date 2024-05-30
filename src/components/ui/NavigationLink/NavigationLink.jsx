import { useMemo } from "react";
import { AppRoute } from "../../../shared/config";
import PropTypes from "prop-types";
import {
  OpacityStyledLink,
  StyledLink,
  StyledImage,
  ReversedStyledImage,
} from "./style";

const NavigationLink = ({ to, isMain }) => {
  const routeComponents = useMemo(
    () => ({
      [AppRoute.MAIN]: (
        <>
          <StyledImage
            src="https://svgshare.com/i/16Vj.svg"
            alt="Employer Icon"
          />
          <span>о сотруднике</span>
        </>
      ),
      [AppRoute.COMPANY]: (
        <>
          о компании
          <ReversedStyledImage
            src="https://svgshare.com/i/16Vj.svg"
            alt="Company Icon"
          />
        </>
      ),
    }),
    []
  );
  const Component = isMain ? OpacityStyledLink : StyledLink;

  return <Component to={to}>{routeComponents[to]}</Component>;
};

NavigationLink.propTypes = {
  to: PropTypes.oneOf([AppRoute.MAIN, AppRoute.COMPANY]).isRequired,
  isMain: PropTypes.bool.isRequired,
};

export default NavigationLink;
