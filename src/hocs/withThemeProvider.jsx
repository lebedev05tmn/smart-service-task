import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

// HOC для провайдинга тем styled-components

const withThemeProvider = Component => {
  const ThemedComponent = theme => (
    <ThemeProvider theme={theme}>{Component}</ThemeProvider>
  );

  ThemedComponent.propTypes = {
    theme: PropTypes.shape({
      backgroundWhite: PropTypes.string.isRequired,
      backgroundBlack: PropTypes.string.isRequired,
      mobileBackground: PropTypes.string.isRequired,
      baseWhite: PropTypes.string.isRequired,
      baseBlack: PropTypes.string.isRequired,
      mediaDesktop: PropTypes.string.isRequired,
      spanColor: PropTypes.string.isRequired,
    }).isRequired,
    ...Component.propTypes,
  };

  return ThemedComponent;
};

export default withThemeProvider;
