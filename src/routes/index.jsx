import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login";
import Quiz from "../pages/quiz";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
  ]);

  return <RouterProvider router={router} />;
}
