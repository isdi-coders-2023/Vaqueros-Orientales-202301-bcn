import { Form } from "../../components/Form/Form";
import CreateEventStyled from "./CreateEventStyled";

const CreateEvent = (): JSX.Element => {
  return (
    <>
      <CreateEventStyled>
        <div className="create">
          <h1 className="create__title">
            Create<span className="create__accent"> your Event</span>
          </h1>
        </div>

        <Form />
      </CreateEventStyled>
    </>
  );
};

export default CreateEvent;
