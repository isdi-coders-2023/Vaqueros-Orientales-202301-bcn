import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a message error in a heading", () => {
      render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );

      const info = screen.getByRole("heading");

      expect(info).toBeInTheDocument();
    });
  });
});
