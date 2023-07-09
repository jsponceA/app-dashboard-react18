import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../pages/auth/Login";
import Template from "../layout/Template";
import HomeIndex from "../pages/home/Index";
import UserIndex from "../pages/user/Index";
import TaskIndex from "../pages/task/Index";
import TaskCreate from "../pages/task/Create";
import TaskEdit from "../pages/task/Edit";

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
    path: "/",
    element: <Template />,
    children: [
      {
        index: true,
        path: "home",
        element: <ProtectedRoute element={HomeIndex} />,
      },
      {
        path: "users",
        element: <ProtectedRoute element={UserIndex} />,
      },
      {
        path: "tasks",
        element: <ProtectedRoute element={TaskIndex} />,
      },
      {
        path: "tasks/create",
        element: <ProtectedRoute element={TaskCreate} />,
      },
      {
        path: "tasks/edit/:id",
        element: <ProtectedRoute element={TaskEdit} />,
      },
    ],
  },
]);

export default routes;
