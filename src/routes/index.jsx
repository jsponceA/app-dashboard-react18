import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../pages/auth/Login";
import Template from "../layout/Template";
import HomeIndex from "../pages/home/Index";
import UserIndex from "../pages/user/Index";
import UserCreate from "../pages/user/Create";
import UserEdit from "../pages/user/Edit";
import CategoryIndex from "../pages/category/Index";
import CategoryCreate from "../pages/category/Create";
import CategoryEdit from "../pages/category/Edit";
import TagIndex from "../pages/tag/Index";
import TagCreate from "../pages/tag/Create";
import TagEdit from "../pages/tag/Edit";
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
        path: "users/create",
        element: <ProtectedRoute element={UserCreate} />,
      },
      {
        path: "users/edit/:id",
        element: <ProtectedRoute element={UserEdit} />,
      },

      {
        path: "categories",
        element: <ProtectedRoute element={CategoryIndex} />,
      },
      {
        path: "categories/create",
        element: <ProtectedRoute element={CategoryCreate} />,
      },
      {
        path: "categories/edit/:id",
        element: <ProtectedRoute element={CategoryEdit} />,
      },

      {
        path: "tags",
        element: <ProtectedRoute element={TagIndex} />,
      },
      {
        path: "tags/create",
        element: <ProtectedRoute element={TagCreate} />,
      },
      {
        path: "tags/edit/:id",
        element: <ProtectedRoute element={TagEdit} />,
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
