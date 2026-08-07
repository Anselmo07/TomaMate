import { createBrowserRouter } from "react-router-dom";

import Home from "../features/home/Home";
import Dashboard from "../features/dashboard/components/Dashboard";
import InventoryPage from "../game/inventory/pages/InventoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/inventory",
    element: <InventoryPage />,
  },
]);