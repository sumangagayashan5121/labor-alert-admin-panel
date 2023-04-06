import React from "react";
import ReactDOM from "react-dom/client";

import { Toaster } from "react-hot-toast";

import { RootContainer } from "./pages/Root/rootContainer";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <RootContainer />
    <Toaster />
  </React.StrictMode>
);
