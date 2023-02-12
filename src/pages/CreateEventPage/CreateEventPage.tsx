import { Form } from "../../components/Form/Form";
import CreateEventStyled from "./CreateEventStyled";

const CreateEventPage = (): JSX.Element => {
  return (
    <>
      <CreateEventStyled className="create">
        <h1 className="create__title">
          Create<span className="create__accent"> your Event</span>
        </h1>

        <Form />
      </CreateEventStyled>
    </>
  );
};

export default CreateEventPage;
