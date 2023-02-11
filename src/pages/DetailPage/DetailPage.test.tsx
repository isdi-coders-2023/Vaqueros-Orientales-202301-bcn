import { render, screen } from "@testing-library/react";
import DetailPage from "./DetailPage";

describe("Given the DetailPage", () => {
  describe("When it renders", () => {
    test("Then it should a headind with the text 'EventInfo'", () => {
      const pageTitle = "EventInfo";
      render(<DetailPage />);
      const expectedResult = screen.getByRole("heading", { name: pageTitle });
      expect(expectedResult).toBeInTheDocument();
    });
  });
});
