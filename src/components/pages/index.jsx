import { RouterProvider } from "react-router-dom";
import { desktopRouter, mobileRouter } from "./config";
import useMedia from "../../hooks/useMedia";
import { MEDIA_DESKTOP } from "../../shared/config";

// Формирование роутера

const Routing = () => {
  const router = useMedia(MEDIA_DESKTOP, desktopRouter, mobileRouter);

  if (!router) return <RouterProvider router={mobileRouter} />;

  return <RouterProvider router={router} />;
};

export default Routing;
