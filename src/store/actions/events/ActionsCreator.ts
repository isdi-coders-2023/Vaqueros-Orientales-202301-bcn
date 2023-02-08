import { EventsStructure, EventStructure } from "../../../data/types";
import { EventsActionType, LoadEventsAction, LoadEventAction } from "./types";

export const loadEventsActionCreator = (
  events: EventsStructure
): LoadEventsAction => ({
  type: EventsActionType.loadEvents,
  payload: events,
});

export const loadEventActionCreator = (
  event: EventStructure
): LoadEventAction => ({
  type: EventsActionType.loadEvent,
  payload: event,
});
