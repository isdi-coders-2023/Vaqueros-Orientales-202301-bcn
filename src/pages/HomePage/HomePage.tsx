import React, { useContext, useEffect } from "react";
import EventsList from "../../components/EventsList/EventsList";

import useApi from "../../hooks/useApi";
import EventsContext from "../../store/contexts/events/EventsContext";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { loadEvents } = useApi();
  const { events } = useContext(EventsContext);

  useEffect(() => {
    (async () => loadEvents())();
  }, [loadEvents]);

  return (
    <>
      <HomePageStyled>
        <h1 className="title">FindEvents</h1>
      </HomePageStyled>
      <div className="grid-container">
        <EventsList events={events} />;
      </div>
    </>
  );
};

export default HomePage;
