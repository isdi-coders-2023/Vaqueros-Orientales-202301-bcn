export enum UiActionType {
  setLoading,
  unsetLoading,
  default,
}

export interface uiAction {
  type: UiActionType;
  payload?: unknown;
}

export interface SetLoadingAction extends uiAction {}

export interface unsetLoadingAction extends uiAction {}
