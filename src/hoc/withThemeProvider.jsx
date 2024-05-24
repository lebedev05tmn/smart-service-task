import { ThemeProvider } from "styled-components";

const withThemeProvider = Component => theme =>
  <ThemeProvider theme={theme}>{Component}</ThemeProvider>;

export default withThemeProvider;
