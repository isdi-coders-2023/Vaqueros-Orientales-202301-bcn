import { useMemo, useReducer } from "react";
import eventsReducer from "../../reducers/events/eventsReducer";
import EventsContext from "./EventsContext";

interface EventsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const EventsContextProvider = ({
  children,
}: EventsContextProviderProps): JSX.Element => {
  const [events, dispatch] = useReducer(eventsReducer, []);

  const value = useMemo(() => ({ events, dispatch }), [events, dispatch]);

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
};

export default EventsContextProvider;
