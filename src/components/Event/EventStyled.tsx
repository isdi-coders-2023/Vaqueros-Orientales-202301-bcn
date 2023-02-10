import styled from "styled-components";

const EventStyled = styled.article`
  .card {
    max-width: 32rem;
    max-height: 32rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

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
    }

    &__image {
      object-fit: cover;
    }

    &__info {
      padding-top: 1rem;
      max-width: 28rem;

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
