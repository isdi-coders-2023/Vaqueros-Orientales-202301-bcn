import styled from "styled-components";

const FormStyled = styled.div`
  background-color: #edf3f7;

  min-height: 100vh;
  padding: 2rem;
  text-align: left;

  .form {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    font-weight: bold;

    &__info {
      font-size: 2.5rem;
      text-align: center;
      padding: 0 3rem 3rem 3rem;
    }

    & label {
      padding: 0.5rem 0.5rem 0.5rem 0;
    }

    & input,
    select,
    button {
      border: 1px solid black;
      border-radius: 4px;
      font-size: 1.4rem;
      padding: 0.5rem;
      margin-bottom: 1rem;
    }

    & .form__button {
      text-transform: uppercase;
      margin-top: 20px;
      border: none;
      background-color: #cd4631;
      color: #fff;
    }
  }
`;

export default FormStyled;
