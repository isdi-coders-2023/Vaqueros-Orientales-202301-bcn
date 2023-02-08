import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given the Home page", () => {
  describe("When it renders", () => {
    test("Then it should the text 'Home'", () => {
      render(<HomePage />);
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
