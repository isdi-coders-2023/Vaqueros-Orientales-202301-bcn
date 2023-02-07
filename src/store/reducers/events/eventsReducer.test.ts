import { EventsStructure } from "../../../data/types";
import { EventsActionType, LoadEventsAction } from "../../actions/events/types";
import eventsReducer from "./eventsReducer";

describe("Given the eventReducer", () => {
  describe("When it receives an unkwnon action", () => {
    test("Then it should return the initial state", () => {
      const initialState: EventsStructure = [
        {
          name: "Opera",
          id: "",
          type: "",
          images: [{ url: "" }],
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
          priceRanges: [{ min: 300 }],
          dates: { start: { localDate: "", localTime: "" } },
        },
        {
          name: "Cinema",
          id: "",
          type: "",
          images: [{ url: "" }],
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
          priceRanges: [{ min: 10 }],
          dates: { start: { localDate: "", localTime: "" } },
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
            name: "Opera",
            id: "",
            type: "",
            images: [{ url: "" }],
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
            priceRanges: [{ min: 300 }],
            dates: { start: { localDate: "", localTime: "" } },
          },
          {
            name: "Opera",
            id: "",
            type: "",
            images: [{ url: "" }],
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
            priceRanges: [{ min: 300 }],
            dates: { start: { localDate: "", localTime: "" } },
          },
        ],
      };

      const newState = eventsReducer(initialState, action);

      expect(newState.length).toBe(2);
    });
  });
});
