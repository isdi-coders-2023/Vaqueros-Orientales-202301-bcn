import { EventsStructure, EventStructure } from "../data/types";
import { UiAction } from "../store/actions/ui/types";
import { EventsAction } from "../store/actions/events/types";
import EventsContext from "../store/contexts/events/EventsContext";
import UiContext from "../store/contexts/ui/UiContext";

export interface MockContextProviderProps {
  children: JSX.Element | JSX.Element[];
  mockStore: StoreStructure;
  uiMockStore: uiStoreStructure;
}

interface StoreStructure {
  store: {
    events: EventsStructure;
    dispatch: React.Dispatch<EventsAction>;
    event: EventStructure;
    detailDispatch: React.Dispatch<EventsAction>;
  };
}

interface uiStoreStructure {
  dispatch: React.Dispatch<UiAction>;
  isLoading: boolean;
}

interface uiStoreStructure {
  dispatch: React.Dispatch<UiAction>;
  isLoading: boolean;
}

const MockContextProvider = ({
  children,
  mockStore,
  uiMockStore,
}: MockContextProviderProps): JSX.Element => {
  return (
    <UiContext.Provider value={uiMockStore}>
      <EventsContext.Provider value={mockStore}>
        {children}
      </EventsContext.Provider>
    </UiContext.Provider>
  );
};

export default MockContextProvider;
