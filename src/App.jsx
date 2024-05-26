import withThemeProvider from "./hocs/withThemeProvider";
import withGlobalStyles from "./hocs/withGlobalStyles";
import Routing from "./components/pages";
import { defaultTheme } from "./themes/default";

const App = () => {
  return withThemeProvider(withGlobalStyles(<Routing />)())(defaultTheme);
};

export default App;
