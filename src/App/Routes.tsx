import { useRoutes } from "react-router-dom";
import Login from "../Login";
import Years from "../Years";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/years",
      element: <Years />,
    },
  ]);
  return routes;
}
