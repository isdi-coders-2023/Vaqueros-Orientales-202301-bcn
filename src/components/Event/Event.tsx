import { EventStructure } from "../../data/types";
import EventStyled from "./EventStyled";

interface EventProps {
  event: EventStructure;
}

const Event = ({ event }: EventProps): JSX.Element => {
  return (
    <EventStyled className="event">
      <div className="card">
        <button className="card__button-edit"></button>
        <div className="card__container-image">
          <img
            src={event.images[4].url}
            alt={event.name}
            width="280"
            height="auto"
            className="card__image"
          />
        </div>
        <div className="card__info">
          <div className="container-info-city">
            <span className="card__info-city">
              {event._embedded.venues[0].city.name}
            </span>
            <span className="card__info-date">
              {event.dates.start.localDate}
            </span>
          </div>
          <div className="container-info-title">
            <h2 className="card__info-title">{event.name}</h2>
            <button className="card__button-fav" aria-pressed="true"></button>
          </div>
        </div>
      </div>
    </EventStyled>
  );
};

export default Event;
