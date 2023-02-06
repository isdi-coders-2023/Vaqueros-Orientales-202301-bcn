import {EventsStructure} from "../../../data/types"


export enum EventsActionType{
  loadEvents,
}

export interface EventsAction{
  type: EventsActionType,
  payload: unknown,

}

export interface loadEventsAction extends EventsAction{
  payload: EventsStructure
}
