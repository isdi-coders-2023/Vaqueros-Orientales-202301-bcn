import { createBrowserRouter } from "react-router-dom";
import Layaout from "../Layaout/Layaout";
import CreateEvent from "../pages/CreateEventPage/CreateEventPage";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layaout />,
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
