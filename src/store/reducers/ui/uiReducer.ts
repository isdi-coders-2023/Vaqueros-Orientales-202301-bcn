import { uiAction, UiActionType } from "../../actions/ui/types";

const uiReducer = (currentUiState: boolean, action: uiAction) => {
  let newUiState: boolean;

  if ((action.type = UiActionType.setLoading)) {
    newUiState = true;
  } else {
    newUiState = currentUiState;
  }
  return newUiState;
};

export default uiReducer;
