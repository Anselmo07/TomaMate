import { createBrowserRouter } from "react-router-dom";

import Home from "../features/home/Home";
// import Dashboard from "../features/dashboard/components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
]);