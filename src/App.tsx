import { RouterProvider } from "react-router-dom";
import CreateEvent from "./pages/CreateEventPage/CreateEventPage";
import HomePage from "./pages/HomePage/HomePage";
import router from "./router/router";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <RouterProvider router={router} />
      <HomePage />
      <CreateEvent />
    </div>
  );
};

export default App;
