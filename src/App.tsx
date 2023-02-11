import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
