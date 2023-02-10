import { SetLoadingAction, UiActionType, unsetLoadingAction } from "./types";

export const setLoadingActionCreator = (): SetLoadingAction => ({
  type: UiActionType.setLoading,
});

export const unsetLoadingActionCreator = (): unsetLoadingAction => ({
  type: UiActionType.unsetLoading,
});
