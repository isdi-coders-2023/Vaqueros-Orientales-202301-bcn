export enum UiActionType {
  setLoading,
  unsetLoading,
  default,
}

export interface UiAction {
  type: UiActionType;
  payload?: unknown;
}

export interface SetLoadingAction extends UiAction {}

export interface UnsetLoadingAction extends UiAction {}
