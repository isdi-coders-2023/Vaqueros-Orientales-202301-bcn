import { EventsStructure } from "../data/types";
import { EventsAction } from "../store/actions/events/types";

export const dispatch: React.Dispatch<EventsAction> = jest.fn();

export const mockStore = { dispatch, events: [] as EventsStructure };

export const mockDispatch = jest.spyOn(mockStore, "dispatch");
