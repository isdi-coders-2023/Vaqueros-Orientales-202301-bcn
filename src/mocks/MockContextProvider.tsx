import { EventsStructure } from "../data/types";
import EventsContext from "../store/contexts/events/EventsContext";

export interface MockContextProviderProps {
  children: JSX.Element | JSX.Element[];
  mockStore: StoreStructure;
}

interface StoreStructure {
  dispatch: React.Dispatch<any>;
  events: EventsStructure;
}

const MockContextProvider = ({
  children,
  mockStore,
}: MockContextProviderProps): JSX.Element => {
  return (
    <EventsContext.Provider value={mockStore}>
      {children}
    </EventsContext.Provider>
  );
};

export default MockContextProvider;
