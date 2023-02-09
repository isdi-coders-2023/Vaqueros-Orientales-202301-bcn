import { EventStructure } from "../../data/types";
import { loadEventActionCreator } from "./events/EventsActionsCreator";
import { EventsActionType, LoadEventAction } from "./events/types";

describe("Given a loadEventAction", () => {
  describe("When it recieves an event", () => {
    test("Then it should return an action with type 'loadEvent' and one event as a payload", () => {
      const event: EventStructure = {
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
