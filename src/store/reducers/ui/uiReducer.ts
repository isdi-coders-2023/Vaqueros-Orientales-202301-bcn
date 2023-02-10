import { UiAction, UiActionType } from "../../actions/ui/types";

const uiReducer = (currentUiState: boolean, action: UiAction) => {
  let newUiState: boolean;

  switch (action.type) {
    case UiActionType.setLoading:
      newUiState = true;
      break;

    case UiActionType.unsetLoading:
      newUiState = false;
      break;

    default:
      newUiState = currentUiState;
  }
  return newUiState;
};

export default uiReducer;
