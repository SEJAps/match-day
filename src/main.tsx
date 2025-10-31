import "./assets/styles/index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import { router } from "./router";
import "./i18n";

const root = document.getElementById("root") as HTMLElement;

const macthDayApp = ReactDOM.createRoot(root);

macthDayApp.render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-center"
      containerStyle={{
        top: 32,
      }}
      toastOptions={{
        duration: 4000,
        style: {
          background: "#363636",
          color: "#fff",
        },
        success: {
          duration: 3000,
          iconTheme: {
            primary: "#4ade80",
            secondary: "#fff",
          },
        },
        error: {
          duration: 5000,
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
        },
      }}
    />
  </StrictMode>,
);
