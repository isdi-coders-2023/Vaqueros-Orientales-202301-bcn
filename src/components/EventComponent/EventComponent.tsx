import EventComponentStyled from "./EventComponentStyled";

const EventComponent = (): JSX.Element => {
  return (
    <EventComponentStyled className="event">
      <div className="card">
        <button className="card__button-edit">*</button>
        <div className="card__container-image">
          <img
            src="https://image.roku.com/blog/wp-content/uploads/2022/02/Superbowl_Chiefs-vs-Eagles_Roku_1200x628.jpg"
            alt="2 quarterbacks between the superbowl logo"
            width="280"
            className="card__image"
          />
        </div>
        <div className="card__info">
          <div className="container-info-city">
            <span className="card__info-city">Phoenix</span>
            <span className="card__info-date">13 Feb, 2023</span>
          </div>
          <div className="container-info-title">
            <h2 className="card__info-title">SuperBowl</h2>
            <button className="card__button-fav">👍</button>
          </div>
        </div>
      </div>
    </EventComponentStyled>
  );
};

export default EventComponent;
