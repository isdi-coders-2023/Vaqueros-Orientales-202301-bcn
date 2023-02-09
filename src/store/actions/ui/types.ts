export enum UiActionType {
  setLoading,
}

export interface uiAction {
  type: UiActionType;
  payload?: unknown;
}

export interface SetLoadingAction extends uiAction {}
