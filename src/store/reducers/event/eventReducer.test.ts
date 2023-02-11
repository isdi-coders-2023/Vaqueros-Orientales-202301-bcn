import { EventStructure } from "../../../data/types";
import { EventsActionType, LoadEventAction } from "../../actions/events/types";
import eventReducer from "./eventReducer";

describe("Given the eventReducer", () => {
  describe("When it's recieves an unkwnon action", () => {
    test("Then it should return the initial state", () => {
      const initialState = {};

      const action = {
        type: "" as unknown as EventsActionType,
        payload: {},
      };

      const newState = eventReducer(
        initialState as EventStructure,
        action as LoadEventAction
      );

      expect(newState).toBe(initialState);
    });
  });

  describe("When it recieves an LoadEvent action", () => {
    test("Then it should return a new state with the event recieved", () => {
      const initialState = {} as EventStructure;
      const action = {
        type: EventsActionType.loadEvent,
        payload: {
          name: "Shakira",
          id: "589",
          type: "",
          images: [{}, {}, {}, {}, { url: "" }],
          _embedded: {
            venues: [
              {
                name: "",
                city: { name: "" },
                country: { name: "" },
                address: { line1: "" },
              },
            ],
          },
          priceRanges: [{ min: 500 }],
          dates: { start: { localDate: "", localTime: "" } },
        },
      };
      const newState = eventReducer(initialState, action);
      expect(newState).toStrictEqual(action.payload);
    });
  });
});
