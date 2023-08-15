import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM  from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals"
import App from "./App";
import {StoreProvider} from "./store";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
