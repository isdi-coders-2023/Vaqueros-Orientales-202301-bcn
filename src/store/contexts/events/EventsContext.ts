import { createContext } from "react";
import { EventsStructure, EventStructure } from "../../../data/types";
import { EventsAction } from "../../actions/events/types";

interface EventsContextStructure {
  store: {
    events: EventsStructure;
    dispatch: React.Dispatch<EventsAction>;
    event: EventStructure;
    detailDistpatch: React.Dispatch<EventsAction>;
  };
}

const EventsContext = createContext({} as EventsContextStructure);

export default EventsContext;
