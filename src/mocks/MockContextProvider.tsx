import { EventsStructure, EventStructure } from "../data/types";
import { EventsAction } from "../store/actions/events/types";
import EventsContext from "../store/contexts/events/EventsContext";

export interface MockContextProviderProps {
  children: JSX.Element | JSX.Element[];
  mockStore: StoreStructure;
}

interface StoreStructure {
  store: {
    events: EventsStructure;
    dispatch: React.Dispatch<EventsAction>;
    event: EventStructure;
    detailDistpatch: React.Dispatch<EventsAction>;
  };
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
