import { render, screen } from "@testing-library/react";
import Home from "./HomePage";

describe("Given the Home page", () => {
  describe("When it renders", () => {
    test("Then it should the text 'Home'", () => {
      render(<Home />);
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
