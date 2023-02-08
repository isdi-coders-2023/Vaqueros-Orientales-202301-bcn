import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Given a Navbar Component", () => {
  describe("When it renders with a list of 3 icons", () => {
    test("Then it should show 3 li elements", () => {
      render(<Navbar />);

      const info = screen.getAllByRole("listitem").length;

      expect(info).toBe(3);
    });
  });

  describe("When it renders with a list", () => {
    test("Then it should show a element with ul tag", () => {
      render(<Navbar />);

      const info = screen.getByRole("list").innerHTML;

      expect(info).toContain("<li");
    });
  });

  describe("When it renders", () => {
    test("Then it shoul show a ul-list element", () => {
      render(<Navbar />);

      const info = screen.getByRole("list");

      expect(info).toBeInTheDocument();
    });
  });
});
