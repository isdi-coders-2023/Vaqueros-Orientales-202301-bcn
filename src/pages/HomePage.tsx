import React, { useContext, useEffect } from "react";
import EventsList from "../components/EventsList/EventsList";

import useApi from "../hooks/useApi";
import EventsContext from "../store/contexts/events/EventsContext";

const Home = (): JSX.Element => {
  const { loadEvents } = useApi();
  const { events } = useContext(EventsContext);

  useEffect(() => {
    (async () => loadEvents("music"))();
  }, [loadEvents]);

  if (!events) {
    return <h1>Loading...</h1>;
  }

  return <EventsList events={events} />;
};

export default Home;
