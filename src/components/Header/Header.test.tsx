import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it rendered", () => {
    test("Then it should show a logo with the alternative", () => {
      const alternativeText = "Event-Oh logo";

      render(
        <>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </>
      );
      const image = screen.getByAltText(alternativeText);
      expect(image).toBeInTheDocument();
    });
  });
});
