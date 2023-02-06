import { EventsStructure } from "../../../data/types";
import { loadEventsActionCreator } from "./loadEventsActionCreator";
import { EventsActionType, loadEventsAction } from "./types";

describe("Given a loadEventsAction function", () => {
  describe("When it receives a list of two events", () => {
    test("Then it should return an action with type 'loadEvents' and two events as payload", () => {
      const events: EventsStructure = [
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

      const expectedLoadEventsAction: loadEventsAction = {
        type: EventsActionType.loadEvents,
        payload: events,
      };

      const loadEventsAction = loadEventsActionCreator(events);

      expect(loadEventsAction).toStrictEqual(expectedLoadEventsAction);
    });
  });
});
