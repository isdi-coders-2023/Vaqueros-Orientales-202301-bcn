import { EventsStructure } from "../data/types";

export interface MockContextProviderProps {
  children: JSX.Element | JSX.Element[];
  mockStore: StoreStructure;
}

interface StoreStructure {
  dispatch: React.Dispatch<any>;
  events: EventsStructure;
}
