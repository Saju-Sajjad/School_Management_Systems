// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from './Store'
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
