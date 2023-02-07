import { LoadEventsAction } from "../../actions/events/types";
import eventsReducer from "./eventsReducer";

describe("Given the eventReducer", () => {
  describe("When it receives an unkwnon action", () => {
    test("Then it should return the initial state", () => {
      const initialState = [
        {
          id: 1,
          type: "concert",
          name: "",
          image: "",
          price: 100,
          address: "",
          location: "",
          time: "",
        },
        {
          id: 2,
          type: "theatre",
          name: "",
          image: "",
          price: 100,
          address: "",
          location: "",
          time: "",
        },
      ];

      const newState = eventsReducer(initialState, {} as LoadEventsAction);

      expect(newState).toBe(initialState);
    });
  });
});
