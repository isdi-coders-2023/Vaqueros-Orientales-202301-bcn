import { EventsStructure } from "../../../data/types";
import { EventsActionType, LoadEventsAction } from "./types";

export const loadEventsActionCreator = (
  events: EventsStructure
): LoadEventsAction => ({
  type: EventsActionType.loadEvents,
  payload: events,
});
