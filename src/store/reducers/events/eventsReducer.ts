import { EventsStructure } from "../../../data/types";
import { EventsActionType, loadEventsAction } from "../../actions/events/types";

const eventsReducer = (
  currentEvent: EventsStructure,
  action: loadEventsAction
): EventsStructure => {
  let newEvents: EventsStructure;

  if (action.type === EventsActionType.loadEvents) {
    newEvents = [...(action as loadEventsAction).payload];
  } else {
    newEvents = currentEvent;
  }
  return newEvents;
};

export default eventsReducer;
