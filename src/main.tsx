import "./assets/styles/index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { StrictMode } from "react";
import { router } from "./router";

const root = document.getElementById("root") as HTMLElement;

const macthDayApp = ReactDOM.createRoot(root);

macthDayApp.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
