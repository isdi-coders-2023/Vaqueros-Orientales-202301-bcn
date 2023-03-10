import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import Title from "../../components/Title/Title";
import useApi from "../../hooks/useApi";
import EventsContext from "../../store/contexts/events/EventsContext";
import DetailPageStyled from "./DetailPageStyled";

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
      {event && (
        <DetailPageStyled className="event-detail">
          <Title text="Event" description="Info" />
          <img src={event.images[4].url} alt={event.name} />
          <div className="event-detail__info">
            <h2 className="event-detail__title">{event.name}</h2>
            <div className="column">
              <h3>Type of Event</h3>
              <span>{event.type}</span>
              <h3>Date</h3>
              <span>{event.dates.start.localDate}</span>
              <h3>Time</h3>
              <span>{event.dates.start.localDate}</span>
              <h3>Location</h3>
              <span>{event._embedded.venues[0].city.name}</span>
            </div>
            <div className="column">
              <h3>Address</h3>
              <span>{event._embedded.venues[0].address.line1}</span>
              <h3>Price</h3>
              <span>75 €</span>
            </div>
          </div>
        </DetailPageStyled>
      )}
    </>
  );
};

export default DetailPage;
