import {EventStructure, EventsStructure} from "../../../data/types"


export enum EventsActionType{
  loadEvents,
}

export interface EventsAction{
  type: EventsActionType,
  payload: unknown,

}

export interface loadEvents extends EventsAction{
  payload: EventsStructure
}
