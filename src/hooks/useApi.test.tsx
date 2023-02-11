import { renderHook, waitFor } from "@testing-library/react";
import { errorHandlers } from "../mocks/handlers";
import MockContextProvider from "../mocks/MockContextProvider";
import { mockDispatch, mockStore } from "../mocks/mockStore";
import { server } from "../mocks/server";
import { uiMockStore } from "../mocks/uiMockStore";
import useApi from "./useApi";

const dispatcher = mockDispatch;
const store = mockStore;
const uiStore = uiMockStore;

describe("Given the custom hook useApi", () => {
  describe("When it is called", () => {
    test("Then dispatch should be called", async () => {
      const {
        result: {
          current: { loadEvents },
        },
      } = renderHook(() => useApi(), {
        wrapper: ({ children }) => {
          return (
            <MockContextProvider uiMockStore={uiStore} mockStore={store}>
              {children}
            </MockContextProvider>
          );
        },
      });

      await waitFor(async () => loadEvents());

      expect(dispatcher).toHaveBeenCalled();
    });
  });
  describe("When it is called and the response from the fetch fails", () => {
    beforeEach(() => server.resetHandlers(...errorHandlers));
    test("Then dispatch should not be called", async () => {
      const {
        result: {
          current: { loadEvents },
        },
      } = renderHook(() => useApi(), {
        wrapper: ({ children }) => {
          return (
            <MockContextProvider uiMockStore={uiStore} mockStore={store}>
              {children}
            </MockContextProvider>
          );
        },
      });

      await waitFor(async () => loadEvents());

      expect(dispatcher).not.toBeCalled();
    });
  });
});
