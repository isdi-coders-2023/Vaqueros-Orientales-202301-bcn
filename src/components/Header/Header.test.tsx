import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it rendered", () => {
    test("Then it should show a heading", () => {
      render(<Header />);
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
