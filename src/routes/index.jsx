import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Template from "../layout/Template";
import HomeIndex from "../pages/home/Index";
import UserIndex from "../pages/user/Index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Template />,
    children: [
      {
        index: true,
        element: <HomeIndex />,
      },
      {
        path: "users",
        element: <UserIndex />,
      },
    ],
  },
]);

export default routes;
