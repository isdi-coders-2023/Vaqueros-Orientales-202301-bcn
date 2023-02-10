import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Layaout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layaout;
