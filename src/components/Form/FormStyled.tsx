import styled from "styled-components";

const FormStyled = styled.div`
  background-color: #edf3f7;
  min-height: 100%;
  padding: 20px;

  .form {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;

    &__info {
      font-size: 2.5rem;
      text-align: center;
      padding: 0 3rem 3rem 3rem;
    }

    & label {
      padding: 5px 5px 5px 0;
    }

    & input,
    select,
    button {
      border: 1px solid black;
      border-radius: 4px;
      font-size: 1.4rem;
      padding: 5px;
      margin-bottom: 10px;
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
