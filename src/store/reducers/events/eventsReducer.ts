import { EventsStructure } from "../../../data/types";
import { EventsActionType, LoadEventsAction } from "../../actions/events/types";

const eventsReducer = (
  currentEvent: EventsStructure,
  action: LoadEventsAction
): EventsStructure => {
  let newEvents: EventsStructure;

  if (action.type === EventsActionType.loadEvents) {
    newEvents = [...action.payload];
  } else {
    newEvents = currentEvent;
  }
  return newEvents;
};

export default eventsReducer;
