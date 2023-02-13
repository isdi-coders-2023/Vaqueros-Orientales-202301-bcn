import { Form } from "../../components/Form/Form";
import CreateEventPageStyled from "./CreateEventPageStyled";

const CreateEventPage = (): JSX.Element => {
  return (
    <CreateEventPageStyled className="create-event-page">
      <h1 className="create-event-page__title">
        Create
        <span className="create-event-page__title--accent"> your Event</span>
      </h1>
      <Form />
    </CreateEventPageStyled>
  );
};

export default CreateEventPage;
