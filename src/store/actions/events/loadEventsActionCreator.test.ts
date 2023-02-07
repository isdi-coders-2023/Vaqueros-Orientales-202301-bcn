import { EventsStructure } from "../../../data/types";
import { loadEventsActionCreator } from "./loadEventsActionCreator";
import { EventsActionType, LoadEventsAction } from "./types";

describe("Given a loadEventsAction function", () => {
  describe("When it receives a list of two events", () => {
    test("Then it should return an action with type 'loadEvents' and two events as payload", () => {
      const events: EventsStructure = [
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

      const expectedLoadEventsAction: LoadEventsAction = {
        type: EventsActionType.loadEvents,
        payload: events,
      };
      const loadEventsAction = loadEventsActionCreator(events);

      expect(loadEventsAction).toStrictEqual(expectedLoadEventsAction);
    });
  });
});
