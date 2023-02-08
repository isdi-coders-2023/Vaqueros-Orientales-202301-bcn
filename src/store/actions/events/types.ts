import { EventsStructure, EventStructure } from "../../../data/types";

export enum EventsActionType {
  loadEvents,
}

export interface EventsAction {
  type: EventsActionType;
  payload?: unknown;
}

export interface LoadEventsAction extends EventsAction {
  payload: EventsStructure;
}

export interface LoadEventAction extends EventsAction {
  payload: EventStructure;
}
