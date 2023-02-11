import { EventsStructure } from "../data/types";
import { UiAction } from "../store/actions/ui/types";
import EventsContext from "../store/contexts/events/EventsContext";
import UiContext from "../store/contexts/ui/UiContext";

export interface MockContextProviderProps {
  children: JSX.Element | JSX.Element[];
  mockStore: StoreStructure;
  uiMockStore: uiStoreStructure;
}

interface StoreStructure {
  dispatch: React.Dispatch<any>;
  events: EventsStructure;
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
