import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./config";

// Формирование роутера
const Routing = () => {
  return (
    <Router>
      <Routes>
        {routes.map(props => (
          <Route {...props} />
        ))}
      </Routes>
    </Router>
  );
};

export default Routing;
