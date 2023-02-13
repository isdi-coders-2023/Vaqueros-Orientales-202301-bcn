import styled from "styled-components";

const DetailPageStyled = styled.section`
  display: flex;
  flex-direction: column;

  .event-detail {
    &__title {
      font-size: 2.8rem;
    }

    &__info {
      background-color: #edf3f7;
      text-align: center;
      line-height: 1.5;
      font-size: 2.2rem;

      h3 {
        color: #cd4631;
        font-size: 2.2rem;
      }
    }
  }
`;

export default DetailPageStyled;
