import { EventsStructure, EventStructure } from "../data/types";
import { EventsAction } from "../store/actions/events/types";
import { mockData } from "../data/mockData";
export const dispatch: React.Dispatch<EventsAction> = jest.fn();
export const detailDistpatch: React.Dispatch<EventsAction> = jest.fn();

export const mockStore = {
  dispatch,
  events: [] as EventsStructure,
  store: {
    events: [] as EventsStructure,
    dispatch,
    event: mockData as EventStructure,
    detailDistpatch,
  },
};

export const mockDispatch = jest.spyOn(mockStore, "dispatch");
