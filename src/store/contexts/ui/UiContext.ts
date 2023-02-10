import { createContext } from "vm";
import { uiAction } from "../../actions/ui/types";

interface UiContextStructure {
  isLoading: boolean;
  unsetLoading: boolean;
  dispatch: React.Dispatch<uiAction>;
}

const uiContext = createContext({} as UiContextStructure);

export default uiContext;
