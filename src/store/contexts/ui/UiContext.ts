import { createContext } from "vm";
import { UiAction } from "../../actions/ui/types";

interface uiContextStructure {
  isLoading: boolean;
  unsetLoading: boolean;
  dispatch: React.Dispatch<UiAction>;
}

const UiContext = createContext({} as uiContextStructure);

export default UiContext;
