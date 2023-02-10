import { EventsStructure, EventStructure } from "../../../data/types";
import {
  loadEventsActionCreator,
  loadEventActionCreator,
} from "./eventsActionsCreators";
import { EventsActionType, LoadEventsAction, LoadEventAction } from "./types";

describe("Given a loadEventsAction function", () => {
  describe("When it receives a list of two events", () => {
    test("Then it should return an action with type 'loadEvents' and two events as payload", () => {
      const events: EventsStructure = [
        {
          name: "Lady Gaga",
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
          priceRanges: [{ min: 12 }],
          dates: { start: { localDate: "", localTime: "" } },
        },
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

describe("Given a loadEventAction", () => {
  describe("When it recieves an event", () => {
    test("Then it should return an action with type 'loadEvent' and one event as a payload", () => {
      const event: EventStructure = {
        name: "Lady Gaga",
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
        priceRanges: [{ min: 12 }],
        dates: { start: { localDate: "", localTime: "" } },
      };
      const expectedLoadEventAction: LoadEventAction = {
        type: EventsActionType.loadEvent,
        payload: event,
      };

      const loadEventAction = loadEventActionCreator(event);

      expect(loadEventAction).toStrictEqual(expectedLoadEventAction);
    });
  });
});
