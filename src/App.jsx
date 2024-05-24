import withThemeProvider from "./hoc/withThemeProvider";
import withGlobalStyles from "./hoc/withGlobalStyles";
import Routing from "./components/pages";
import { defaultTheme } from "./themes/default";

const App = () => {
  return withThemeProvider(withGlobalStyles(<Routing />)())(defaultTheme);
};

export default App;
