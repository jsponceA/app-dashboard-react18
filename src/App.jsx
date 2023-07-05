/*STAR ROUTES*/
import routes from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";
/*END ROUTES */

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
