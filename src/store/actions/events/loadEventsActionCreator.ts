
import { EventsStructure } from "../../../data/types";
import { EventsActionType, loadEventsAction } from "./types";

export const loadEventsActionCreator = (events: EventsStructure): loadEventsAction => ({
  type: EventsActionType.loadEvents, 
  payload: events,
})
