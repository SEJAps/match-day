import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { StrictMode } from "react";
import { router } from "./Router";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
