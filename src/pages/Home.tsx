import React, { useEffect } from "react";

import useApi from "../hooks/useApi";

const Home = (): JSX.Element => {
  const { loadEvents } = useApi();

  useEffect(() => {
    (async () => loadEvents("music"))();
  }, [loadEvents]);

  return <div>Home</div>;
};

export default Home;
