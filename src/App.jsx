/*STAR ROUTES*/
import routes from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
/*END ROUTES */

const App = () => {
  const darkMode = useSelector((state) => state.system.darkMode);
  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-bs-theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
