import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled className="error">
      <h2 className="error__number">
        4<span className="error__accent">0</span>4
      </h2>
      <p className="error__message">
        Something went <span className="error__accent">wrong</span>
      </p>
      <p className="error__message">Please, try again later</p>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
