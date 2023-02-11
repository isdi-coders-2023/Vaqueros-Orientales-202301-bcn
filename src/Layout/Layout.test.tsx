import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Given a Layaout", () => {
  describe("When it rendered", () => {
    test("Then is should show a", () => {
      render(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      );

      const info = screen.getByAltText("Event-Oh logo");

      expect(info).toBeInTheDocument();
    });
  });
});
