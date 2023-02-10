import styled from "styled-components";

const EventStyled = styled.article`
  .card {
    max-width: 32rem;
    /* min-height: 35rem; */
    /* padding: 2rem; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    &__button-edit {
      position: absolute;
      top: 2.5rem;
      right: 3rem;
      font-size: 4rem;
      background: white;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      color: #333;
    }

    &__container-image {
      max-width: 28rem;
      overflow: hidden;
      padding: 0;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    &__image {
      object-fit: cover;
    }

    &__info {
      padding-top: 1rem;
      max-width: 28rem;
      padding: 2rem;
      min-height: 15rem;

      .container-info-city {
        display: flex;
        justify-content: space-between;

        .card__info-city {
          font-size: 1.4rem;
        }
        .card__info-date {
          font-size: 1.4rem;
          text-align: right;
        }
      }
      .container-info-title {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .card__info-title {
          max-width: 22rem;
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: -0.02em;
        }
        .card__button-fav {
          font-size: 2rem;
          background: #333;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          margin-right: 1rem;
        }
      }
    }
  }
`;
export default EventStyled;
