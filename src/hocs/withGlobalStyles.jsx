import GlobalStyle from "../shared/GlobalStyle";
import GlobalFonts from "../fonts/GlobalFonts";

// HOC для рендеринга стилей

const withGlobalStyles = Component => {
  const WrappedComponent = props => (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <Component {...props} />
    </>
  );

  WrappedComponent.displayName = `withGlobalStyles(${
    Component.displayName || "Component with Global Styles"
  })`;

  return WrappedComponent;
};

export default withGlobalStyles;
