import { EventsStructure, EventStructure } from "../data/types";
import { EventsAction } from "../store/actions/events/types";

export const dispatch: React.Dispatch<EventsAction> = jest.fn();
export const detailDistpatch: React.Dispatch<EventsAction> = jest.fn();

export const mockStore = {
  dispatch,
  events: [] as EventsStructure,
  store: {
    events: [] as EventsStructure,
    dispatch,
    event: {
      name: "SuperBowl",
      id: "0",
      type: "",
      images: [
        { url: "", ratio: "" },
        { url: "", ratio: "" },
        { url: "", ratio: "" },
        { url: "", ratio: "" },
        { url: "beyonce.jpg", ratio: "" },
      ],
      _embedded: {
        venues: [
          {
            name: "",
            city: { name: "Phoenix" },
            country: { name: "" },
            address: { line1: "" },
          },
        ],
      },
      priceRanges: [{ min: 0 }],
      dates: { start: { localDate: "", localTime: "" } },
    } as EventStructure,
    detailDistpatch,
  },
};

export const mockDispatch = jest.spyOn(mockStore, "dispatch");
