import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import CreateEvent from "../pages/CreateEventPage/CreateEventPage";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/create",
        element: <CreateEvent />,
      },
    ],
  },
]);

export default router;
