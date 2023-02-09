import { EventStructure } from "../../data/types";
import EventStyled from "./EventStyled";

interface EventProps {
  event: EventStructure;
}

const Event = ({
  event: {
    name,
    images: [{ url }],
    _embedded: {
      venues: [
        {
          city: { name: cityName },
        },
      ],
    },
  },
}: EventProps): JSX.Element => {
  return (
    <EventStyled className="event">
      <div className="card">
        <button className="card__button-edit">*</button>
        <div className="card__container-image">
          <img
            src={url}
            alt={name}
            width="280"
            height="158"
            className="card__image"
          />
        </div>
        <div className="card__info">
          <div className="container-info-city">
            <span className="card__info-city">{cityName}</span>
            <span className="card__info-date">13 Feb, 2023</span>
          </div>
          <div className="container-info-title">
            <h2 className="card__info-title">{name}</h2>
            <button className="card__button-fav"></button>
          </div>
        </div>
      </div>
    </EventStyled>
  );
};

export default Event;
