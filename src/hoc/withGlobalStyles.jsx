import GlobalStyle from "../shared/GlobalStyle";
import GlobalFonts from "../fonts/GlobalFonts";

const withGlobalStyles = Component => () =>
  (
    <>
      <GlobalFonts />
      <GlobalStyle />
      {Component}
    </>
  );

export default withGlobalStyles;
