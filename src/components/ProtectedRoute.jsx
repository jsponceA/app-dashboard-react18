import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component }) => {
  const isAuthenticated = true;
  return isAuthenticated ? <Component /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
