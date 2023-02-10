import { uiAction, UiActionType } from "../../actions/ui/types";
import uiReducer from "./uiReducer";

describe("Given the uiReducer", () => {
  describe("When it receives a setLaoding action", () => {
    test("Then it should change the new state to true", () => {
      const initialState = false;

      const action: uiAction = {
        type: UiActionType.setLoading,
        payload: initialState,
      };

      const newUiState = uiReducer(initialState, action);
      const expectedState = true;

      expect(newUiState).toBe(expectedState);
    });
  });

  describe("When it receives an unsetLaoding action", () => {
    test("Then it should return that the new state is false", () => {
      const initialState = true;

      const action: uiAction = {
        type: UiActionType.unsetLoading,
        payload: initialState,
      };

      const newUiState = uiReducer(initialState, action);
      const expectedState = false;

      expect(newUiState).toBe(expectedState);
    });
  });
  describe("When it receives an unknown action", () => {
    test("Then it should return that the new state is the same as the initialstate", () => {
      const initialState = false;

      const action: uiAction = {
        type: UiActionType.default,
      };

      const newUiState = uiReducer(initialState, action);
      const expectedState = initialState;

      expect(newUiState).toBe(expectedState);
    });
  });
});
