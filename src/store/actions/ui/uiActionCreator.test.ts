import { SetLoadingAction, UiActionType } from "./types";
import {
  setLoadingActionCreator,
  unsetLoadingActionCreator,
} from "./uiActionCreator";

describe("Given a SetLoadingAction function", () => {
  describe("When it is called", () => {
    test("Then it should return an action type 'setIsLoading", () => {
      const loadState = setLoadingActionCreator();

      const expectedIsLoadingState: SetLoadingAction = {
        type: UiActionType.setLoading,
      };

      expect(loadState).toStrictEqual(expectedIsLoadingState);
    });
  });
});

describe("Given an UnsetLoadingAction function", () => {
  describe("When it is called", () => {
    test("Then it should return an action type 'unsetIsLoading", () => {
      const loadState = unsetLoadingActionCreator();

      const expectedIsLoadingState: SetLoadingAction = {
        type: UiActionType.unsetLoading,
      };

      expect(loadState).toStrictEqual(expectedIsLoadingState);
    });
  });
});
