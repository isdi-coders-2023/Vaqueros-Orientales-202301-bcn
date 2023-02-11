import styled from "styled-components";

const NotFoundPageStyled = styled.section`
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  gap: 3rem;
  height: 100%;

  .error {
    &__number {
      font-size: 9.6rem;
    }

    &__accent {
      color: #cd4631;
    }

    &__message {
      text-align: center;
      font-weight: 700;
      font-size: 3.6rem;
    }
  }
`;

export default NotFoundPageStyled;
