import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MockContextProvider from "../../mocks/MockContextProvider";
import { mockStore } from "../../mocks/mockStore";
import DetailPage from "./DetailPage";

const store = mockStore;

describe("Given the DetailPage", () => {
  describe("When it renders", () => {
    test("Then it should shows an image", () => {
      render(
        <MockContextProvider mockStore={store}>
          <DetailPage />
        </MockContextProvider>,
        { wrapper: BrowserRouter }
      );
      const expectedResult = screen.getByRole("img");
      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should shows a heading with the text 'EventInfo'", () => {
      render(
        <MockContextProvider mockStore={store}>
          <DetailPage />
        </MockContextProvider>,
        { wrapper: BrowserRouter }
      );
      const pageTitle = "EventInfo";
      const expectedTitle = screen.getByRole("heading", { name: pageTitle });
      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
