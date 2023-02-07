import { EventsStructure } from "../../../data/types";
import {
  EventsAction,
  EventsActionType,
  LoadEventsAction,
} from "../../actions/events/types";

const eventsReducer = (
  currentEvent: EventsStructure,
  action: EventsAction
): EventsStructure => {
  let newEvents: EventsStructure;

  if (action.type === EventsActionType.loadEvents) {
    newEvents = [...(action as LoadEventsAction).payload];
  } else {
    newEvents = currentEvent;
  }
  return newEvents;
};

export default eventsReducer;
