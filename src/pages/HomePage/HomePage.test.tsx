import { render, screen } from "@testing-library/react";
import MockContextProvider from "../../mocks/MockContextProvider";
import { mockStore } from "../../mocks/mockStore";
import HomePage from "../HomePage/HomePage";

const store = mockStore;

describe("Given the Home page", () => {
  describe("When it renders", () => {
    test("Then it should show the title 'FindEvents'", () => {
      const pageName = "FindEvents";
      render(
        <MockContextProvider mockStore={store}>
          <HomePage />
        </MockContextProvider>
      );
      const title = screen.getByRole("heading", { name: pageName });
      expect(title).toBeInTheDocument();
    });
  });
});
