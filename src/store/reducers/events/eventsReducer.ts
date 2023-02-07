import { EventsStructure } from "../../../data/types";
import { EventsActionType, LoadEventsAction } from "../../actions/events/types";

const eventsReducer = (
  currentEvent: EventsStructure,
  action: LoadEventsAction
): EventsStructure => {
  let newEvents: EventsStructure;

  if (EventsActionType.loadEvents) {
    newEvents = [...(action as LoadEventsAction).payload];
  } else {
    newEvents = currentEvent;
  }
  return newEvents;
};

export default eventsReducer;
