import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
