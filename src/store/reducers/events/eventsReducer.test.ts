import { EventsStructure } from "../../../data/types";
import { EventsActionType, LoadEventsAction } from "../../actions/events/types";
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
  describe("When it receives the loadEventsAction", () => {
    test("Then it should return the new state", () => {
      const initialState: EventsStructure = [];

      const action = {
        type: EventsActionType.loadEvents,
        payload: [
          {
            id: 3,
            type: "concert",
            name: "",
            image: "",
            price: 400,
            address: "",
            location: "",
            time: "",
          },
          {
            id: 4,
            type: "concert",
            name: "",
            image: "",
            price: 500,
            address: "",
            location: "",
            time: "",
          },
        ],
      };
      const newState = eventsReducer(initialState, action);

      expect(newState.length).toBe(2);
    });
  });
});
