import { useMemo, useReducer } from "react";
import { EventStructure } from "../../../data/types";
import eventReducer from "../../reducers/event/eventReducer";
import eventsReducer from "../../reducers/events/eventsReducer";
import EventsContext from "./EventsContext";
import { mockData } from "../../../data/mockData";
interface EventsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const EventsContextProvider = ({
  children,
}: EventsContextProviderProps): JSX.Element => {
  const [events, dispatch] = useReducer(eventsReducer, []);

  const [event, detailDistpatch] = useReducer(
    eventReducer,
    mockData as EventStructure
  );

  const data = useMemo(
    () => ({
      store: {
        events,
        event,
        dispatch,
        detailDistpatch,
      },
    }),
    [event, events]
  );

  return (
    <EventsContext.Provider value={data}>{children}</EventsContext.Provider>
  );
};

export default EventsContextProvider;
