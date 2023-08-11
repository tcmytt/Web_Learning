import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM  from "react-dom";
import reportWebVitals from "./reportWebVitals"
import App from "./App";

import {StoreProvider} from "./store";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StoreProvider>
      <App />
    </StoreProvider>
);
