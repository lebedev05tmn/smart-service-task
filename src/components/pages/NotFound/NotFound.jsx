import { Link } from "react-router-dom";
import { StyledBlock } from "./style";
import { AppRoute } from "../../../shared/config";

const NotFound = () => {
  return (
    <StyledBlock>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <Link to={AppRoute.MAIN}>Домой</Link>
    </StyledBlock>
  );
};

export default NotFound;
