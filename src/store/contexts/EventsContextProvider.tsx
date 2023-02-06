import EventsContext from "./EventsContext";

interface EventsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const EventsContextProvider = ({ children }: EventsContextProviderProps) => {
  return (
    <EventsContext.Provider value={{ name: "" }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
