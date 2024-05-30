import { createBrowserRouter } from "react-router-dom";
import { AppRoute } from "../../shared/config";
import Company from "./Company/Company";
import Employer from "./Employer/Employer";
import NotFound from "./NotFound/NotFound";
import MainMobile from "./MainMobile/MainMobile";

// Конфигурация роутинга для десктопных устройств

export const desktopRouter = createBrowserRouter(
  [
    {
      path: AppRoute.MAIN,
      element: <Employer />,
    },
    {
      path: AppRoute.COMPANY,
      element: <Company />,
    },
    {
      path: AppRoute.NOT_FOUND,
      element: <NotFound />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

// Конфигурация роутинга для мобильных устройств

export const mobileRouter = createBrowserRouter(
  [
    {
      path: AppRoute.MAIN,
      element: <MainMobile />,
    },
    {
      path: AppRoute.NOT_FOUND,
      element: <NotFound />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
