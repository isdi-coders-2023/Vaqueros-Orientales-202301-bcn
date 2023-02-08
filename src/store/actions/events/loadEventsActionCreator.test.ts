import { EventsStructure } from "../../../data/types";
import { loadEventsActionCreator } from "./ActionsCreator";
import { EventsActionType, LoadEventsAction } from "./types";

describe("Given a loadEventsAction function", () => {
  describe("When it receives a list of two events", () => {
    test("Then it should return an action with type 'loadEvents' and two events as payload", () => {
      const events: EventsStructure = [
        {
          name: "Lady Gaga",
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
          priceRanges: [{ min: 12 }],
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
      ];

      const expectedLoadEventsAction: LoadEventsAction = {
        type: EventsActionType.loadEvents,
        payload: events,
      };
      const loadEventsAction = loadEventsActionCreator(events);

      expect(loadEventsAction).toStrictEqual(expectedLoadEventsAction);
    });
  });
});
