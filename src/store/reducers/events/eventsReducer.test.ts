import { EventsStructure } from "../../../data/types";
import { EventsActionType, LoadEventsAction } from "../../actions/events/types";
import eventsReducer from "./eventsReducer";

describe("Given the eventReducer", () => {
  describe("When it receives an unkwnon action", () => {
    test("Then it should return the initial state", () => {
      const initialState = [
        {
          name: "",
          id: 1,
          type: "",
          url: "",
          address: "",
          city: "",
          country: "",
          price: 100,
          date: "",
          time: "",
        },
        {
          name: "",
          id: 1,
          type: "",
          url: "",
          address: "",
          city: "",
          country: "",
          price: 200,
          date: "",
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
            name: "",
            id: 3,
            type: "",
            url: "",
            address: "",
            city: "",
            country: "",
            price: 100,
            date: "",
            time: "",
          },
          {
            name: "",
            id: 4,
            type: "",
            url: "",
            address: "",
            city: "",
            country: "",
            price: 200,
            date: "",
            time: "",
          },
        ],
      };
      const newState = eventsReducer(initialState, action);

      expect(newState.length).toBe(2);
    });
  });
});
