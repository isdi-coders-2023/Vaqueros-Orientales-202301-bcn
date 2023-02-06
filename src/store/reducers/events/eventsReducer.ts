import { EventsStructure } from "../../../data/types";
import { EventsActionType, loadEventsAction } from "../../actions/events/types";



const eventsReducer = (currentEvent: EventsStructure, action: loadEventsAction): EventsStructure =>{
  let newEvents: EventsStructure

  switch(action.type){
    case EventsActionType.loadEvents:
      newEvents = [...(action as loadEventsAction).payload]
      break;
      default: newEvents=currentEvent
  }
  return newEvents
} 

export default eventsReducer;
