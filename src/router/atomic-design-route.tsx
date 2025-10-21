import { lazy } from "react";

// Atomic Design Pages
const AtomicDesignLayout = lazy(() => import("../layouts/AtomicDesignLayout"));
const LogoBrandShowcasePage = lazy(
  () => import("../pages/atomic-design/LogoBrandShowcasePage")
);
const ButtonShowcasePage = lazy(
  () => import("../pages/atomic-design/ButtonShowcasePage")
);

const ToastShowcasePage = lazy(
  () => import("../pages/atomic-design/ToastShowcasePage")
);

const AtomicDesignPage = lazy(
  () => import("../pages/atomic-design/AtomicDesignPage")
);

export const atomicDesignRoute = {
  path: "atomic-design",
  element: <AtomicDesignLayout />,
  children: [
    {
      index: true,
      element: <AtomicDesignPage />,
    },
    {
      path: "toast",
      element: <ToastShowcasePage />,
    },
    {
      path: "buttons",
      element: <ButtonShowcasePage />,
    },
    {
      path: "logo-showcase",
      element: <LogoBrandShowcasePage />,
    },
  ],
};
