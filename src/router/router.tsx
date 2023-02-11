import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import CreateEventPage from "../pages/CreateEventPage/CreateEventPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

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
        element: <CreateEventPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
