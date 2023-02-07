import React, { useEffect } from "react";
import useApi from "../hooks/useApi";

const Home = (): JSX.Element => {
  const getEvents = useApi();

  useEffect(() => {
    (async () => getEvents("music"))();
  }, [getEvents]);

  return <div>Home</div>;
};

export default Home;
