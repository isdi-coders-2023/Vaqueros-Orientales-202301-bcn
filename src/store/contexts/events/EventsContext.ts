import { createContext } from "react";
import { EventsStructure } from "../../../data/types";
import { EventsAction } from "../../actions/events/types";

interface EventsContextStructure {
  events: EventsStructure;
  dispatch: React.Dispatch<EventsAction>;
}

const EventsContext = createContext({} as EventsContextStructure);

export default EventsContext;
