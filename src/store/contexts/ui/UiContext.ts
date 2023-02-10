import { createContext } from "vm";
import { UiAction } from "../../actions/ui/types";

interface UiContextStructure {
  isLoading: boolean;
  unsetLoading: boolean;
  dispatch: React.Dispatch<UiAction>;
}

const UiContext = createContext({} as UiContextStructure);

export default UiContext;
