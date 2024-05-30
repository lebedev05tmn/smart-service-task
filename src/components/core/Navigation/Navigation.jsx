import PropTypes from "prop-types";
import { StyledHeader, StyledNav } from "./style";
import NavigationLink from "../../ui/NavigationLink/NavigationLink";
import { AppRoute } from "../../../shared/config";

const Navigation = ({ isMain }) => (
  <StyledHeader>
    <StyledNav>
      <NavigationLink to={AppRoute.MAIN} isMain={isMain} />
      <NavigationLink to={AppRoute.COMPANY} isMain={!isMain} />
    </StyledNav>
  </StyledHeader>
);

Navigation.propTypes = {
  isMain: PropTypes.bool.isRequired,
};

export default Navigation;
