import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Given a Navbar Component", () => {
  describe("When it renders", () => {
    test("Then it should show a list of 3 icons", () => {
      const numberOfIcons = 3;

      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
      const icons = screen.getAllByRole("listitem");

      expect(icons).toHaveLength(numberOfIcons);
    });
  });

  describe("When it renders by click a link", () => {
    test("Then it should show one active link", () => {
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
      fireEvent.click(screen.getByRole("link", { name: "Create an Event" }));
      const event = screen.getByRole("link", {
        name: "Create an Event",
      }).innerHTML;

      expect(event).toContain("fa-solid fa-plus");
    });
  });
});
