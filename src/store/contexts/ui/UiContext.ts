import { createContext } from "vm";

interface uiContextStructure {
  isLoading: boolean;
  unsetLoading: boolean;
}

export const uiContext = createContext({} as uiContextStructure);
