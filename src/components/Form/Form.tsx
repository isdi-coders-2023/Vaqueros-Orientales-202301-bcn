import FormStyled from "./FormStyled";

export const Form = (): JSX.Element => {
  return (
    <>
      <FormStyled className="create-form">
        <h2 className="form__info">Tell us about your Event</h2>
        <form action="" className="form" aria-label="create an event">
          <label htmlFor="typeofevent">Type of event</label>
          <select name="select1">
            <option value="music">Music</option>
            <option value="sports">Sports</option>
          </select>
          <label htmlFor="nameoftheevent">Name of the Event</label>
          <input
            type="text"
            id="nameoftheevent"
            aria-label="name of the Event"
            placeholder="Name of the Event"
          />
          <label htmlFor="photo">Photo</label>
          <input
            type="text"
            id="photo"
            placeholder="Photo"
            aria-label="photo"
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            aria-label="location"
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            placeholder="Price"
            arial-label="price"
          />
          <button className="form__button" type="submit">
            Create Event
          </button>
        </form>
      </FormStyled>
    </>
  );
};
