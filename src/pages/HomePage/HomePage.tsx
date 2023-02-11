import React, { useContext, useEffect } from "react";
import EventsList from "../../components/EventsList/EventsList";

import useApi from "../../hooks/useApi";
import EventsContext from "../../store/contexts/events/EventsContext";
import { filterRepeteadEvents } from "../../utils/filterEvents";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { loadEvents } = useApi();
  const {
    store: { events },
  } = useContext(EventsContext);

  const filterdeData = filterRepeteadEvents(events);

  useEffect(() => {
    (async () => loadEvents())();
  }, [loadEvents]);

  return (
    <>
      <HomePageStyled>
        <h1 className="title">FindEvents</h1>
      </HomePageStyled>
      <div className="grid-container">
        <EventsList events={filterdeData} />;
      </div>
    </>
  );
};

export default HomePage;
