import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import Event from "../../components/Event/Event";
import Title from "../../components/Title/Title";
import useApi from "../../hooks/useApi";
import EventsContext from "../../store/contexts/events/EventsContext";

const DetailPage = () => {
  const { loadEvent } = useApi();
  const { id } = useParams();
  const {
    store: { event },
  } = useContext(EventsContext);

  useEffect(() => {
    (async () => loadEvent(id!))();
  }, [loadEvent, id]);

  return (
    <>
      <header>
        <h1>EventInfo</h1>
        <Title text="Event" description="Info" />
        <Event event={event} />
      </header>
    </>
  );
};

export default DetailPage;
