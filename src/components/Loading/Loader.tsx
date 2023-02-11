import LoaderStyled from "./LoaderStyled";

export const Loader = (): JSX.Element => {
  return (
    <LoaderStyled
      className="loader"
      aria-label="Content loading, our Events will load soon"
      role="status"
    >
      <span className="loader__info">Please, wait</span>
      <div className="dot-wave">
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
      </div>
      <span className="loader__info">
        Our <span className="loader-info__accent">Events</span> will load soon
      </span>
    </LoaderStyled>
  );
};
