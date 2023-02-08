import React, { useEffect } from "react";
import useApi from "../hooks/useApi";

const Home = (): JSX.Element => {
  const { loadEvents } = useApi();

  useEffect(() => {
    (async () => loadEvents("music"))();
  }, [loadEvents]);

  return <h1>Home</h1>;
};

export default Home;
