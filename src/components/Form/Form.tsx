import FormStyled from "./FormStyled";

export const Form = (): JSX.Element => {
  return (
    <>
      <FormStyled className="create-form">
        <p className="form__info">Tell us about your Event</p>
        <form action="" className="form">
          <label htmlFor="typeofevent">Type of event</label>
          <select name="select1">
            <option value="music">Music</option>
            <option value="sports">Sports</option>
          </select>
          <label htmlFor="nameoftheevent">Name of the Event</label>
          <input
            type="text"
            id="nameoftheevent"
            placeholder="Name of the Event"
          />
          <label htmlFor="photo">Photo</label>
          <input type="text" id="photo" placeholder="Photo" />
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="Location" />
          <label htmlFor="price">Price</label>
          <input type="text" id="price" placeholder="Price" />
          <button className="form__button" type="submit">
            Create Event
          </button>
        </form>
      </FormStyled>
    </>
  );
};
