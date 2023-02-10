import { createContext } from "vm";
import { uiAction } from "../../actions/ui/types";

interface uiContextStructure {
  isLoading: boolean;
  unsetLoading: boolean;
  dispatch: React.Dispatch<uiAction>;
}

const uiContext = createContext({} as uiContextStructure);

export default uiContext;
