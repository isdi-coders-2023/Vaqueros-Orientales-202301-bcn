import { EventStructure } from "../../../data/types";
import {
  EventsAction,
  EventsActionType,
  LoadEventAction,
} from "../../actions/events/types";

const eventReducer = (
  currentEvent: EventStructure,
  action: EventsAction
): EventStructure => {
  let newEvent: EventStructure;

  if (action.type === EventsActionType.loadEvent) {
    newEvent = { ...(action as LoadEventAction).payload };
  } else {
    newEvent = currentEvent;
  }
  return newEvent;
};

export default eventReducer;
