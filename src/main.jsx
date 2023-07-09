import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
/* START BOOTSTRAP */
import "./assets/scss/styles.scss";
import * as bootstrap from "bootstrap";
/* END BOOTSTRAP */
/* START REDUX */
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
/* END REDUX */
/* START TOAST */
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
/* END TOAST */

/* REACT TOOLTIP */
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
/* REACT TOOLTIP */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Tooltip id="my-tooltip" className="z-1" />
        <ToastContainer position="top-right" autoClose={3500} pauseOnHover />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
