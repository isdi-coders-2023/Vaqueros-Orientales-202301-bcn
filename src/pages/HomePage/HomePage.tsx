import React, { useContext, useEffect } from "react";
import EventsList from "../../components/EventsList/EventsList";
import Title from "../../components/Title/Title";

import useApi from "../../hooks/useApi";
import EventsContext from "../../store/contexts/events/EventsContext";
import { filterRepeteadEvents as filterRepeatedEvents } from "../../utils/filterEvents";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { loadEvents } = useApi();
  const {
    store: { events },
  } = useContext(EventsContext);

  const filteredData = filterRepeatedEvents(events);

  useEffect(() => {
    (async () => loadEvents())();
  }, [loadEvents]);

  return (
    <HomePageStyled>
      <Title text="Find" description="Events" />
      <div className="grid-container">
        <EventsList events={filteredData} />;
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
