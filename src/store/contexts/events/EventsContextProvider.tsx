import { useReducer } from "react";
import eventsReducer from "../../reducers/events/eventsReducer";
import EventsContext from "./EventsContext";

interface EventsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const EventsContextProvider = ({
  children,
}: EventsContextProviderProps): JSX.Element => {
  const [events, dispatch] = useReducer(eventsReducer, []);
  return (
    <EventsContext.Provider value={{ events, dispatch }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
