import { EventsStructure } from "../../../data/types";
import { EventsActionType, LoadEventsAction } from "../../actions/events/types";
import eventsReducer from "./eventsReducer";

describe("Given the eventsReducer", () => {
  describe("When it receives an unkwnon action", () => {
    test("Then it should return the initial state", () => {
      const initialState: EventsStructure = [
        {
          name: "Opera",
          id: "",
          type: "",
          images: [
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
          ],

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
          images: [
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
          ],
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

      const action = {
        type: "" as unknown as EventsActionType,
        payload: {},
      };

      const newState = eventsReducer(initialState, action as LoadEventsAction);

      expect(newState).toStrictEqual(initialState);
    });
  });
  describe("When it recieves the loadEvents action", () => {
    test("Then it should return a new state with the list of events received", () => {
      const initialState = [] as EventsStructure;
      const action = {
        type: EventsActionType.loadEvents as EventsActionType,
        payload: [
          {
            name: "Cinema",
            id: "",
            type: "",
            images: [
              { url: "", ratio: "" },
              { url: "", ratio: "" },
              { url: "", ratio: "" },
              { url: "", ratio: "" },
              { url: "", ratio: "" },
            ],
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
        ],
      };

      const newState = eventsReducer(initialState, action);
      expect(newState).toStrictEqual(action.payload);
    });
  });
});
