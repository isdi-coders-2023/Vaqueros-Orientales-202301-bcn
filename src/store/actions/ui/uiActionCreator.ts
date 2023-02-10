import { SetLoadingAction, UiActionType, UnsetLoadingAction } from "./types";

export const setLoadingActionCreator = (): SetLoadingAction => ({
  type: UiActionType.setLoading,
});

export const unsetLoadingActionCreator = (): UnsetLoadingAction => ({
  type: UiActionType.unsetLoading,
});
