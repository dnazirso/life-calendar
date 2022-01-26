import { useRoutes } from "react-router-dom";
import Login from "../Login";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return routes;
}
