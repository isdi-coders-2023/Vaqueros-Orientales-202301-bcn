import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it rendered", () => {
    test("Then it should show a logo", () => {
      render(<Header />);
      const image = screen.getByRole("img");
      expect(image).toBeInTheDocument();
    });
  });
});
