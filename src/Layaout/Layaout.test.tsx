import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layaout from "./Layaout";

describe("Given a Layaout", () => {
  describe("When it rendered", () => {
    test("Then is should show a", () => {
      render(
        <BrowserRouter>
          <Layaout />
        </BrowserRouter>
      );

      const info = screen.getByAltText("Event-Oh logo");

      expect(info).toBeInTheDocument();
    });
  });
});
