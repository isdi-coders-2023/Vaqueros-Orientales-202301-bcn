import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
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
      </header>
      {event && (
        <div className="event-detail">
          <img src={event.images[4].url} alt={event.name} />
          <h2>{event.name}</h2>
          <div className="event-detail__info">
            <div>
              <h3>Type of Event</h3>
              <span>{event.type}</span>
              <h3>Date</h3>
              <span>{event.dates.start.localDate}</span>
              <h3>Time</h3>
              <span>{event.dates.start.localDate}</span>
              <h3>Location</h3>
              <span>{event._embedded.venues[0].city.name}</span>
            </div>
            <div>
              <h3>Address</h3>
              <span>{event._embedded.venues[0].address.line1}</span>
              <h3>Price</h3>
              <span>75 €</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
