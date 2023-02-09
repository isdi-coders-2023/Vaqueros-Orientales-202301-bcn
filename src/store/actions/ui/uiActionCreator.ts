import { SetLoadingAction, UiActionType } from "./types";

export const setLoadingActionCreator = (): SetLoadingAction => ({
  type: UiActionType.setLoading,
});
