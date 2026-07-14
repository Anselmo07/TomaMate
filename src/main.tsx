import React from "react";
import ReactDOM from "react-dom/client";
import { MateProvider } from "./context/MateContext";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <MateProvider>

        <App />

    </MateProvider>

</React.StrictMode>
);