import { AppRoute } from "../../shared/config";
import Company from "./Company/Company";
import Details from "./Details/Details";
import NotFound from "./NotFound/NotFound";

export const routes = [
  {
    path: AppRoute.COMPANY,
    element: <Company />,
    key: "company_page",
  },
  {
    path: AppRoute.DETAILS + ":id",
    element: <Details />,
    key: "details_page",
  },
  {
    path: AppRoute.NOT_FOUND,
    element: <NotFound />,
    key: "404_page",
  },
];
