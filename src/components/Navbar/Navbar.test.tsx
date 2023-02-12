import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Given a Navbar Component", () => {
  describe("When it renders with a list of 3 icons", () => {
    test("Then it should show 3 li elements", () => {
      render(
        <>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </>
      );

      const info = screen.getAllByRole("listitem").length;

      expect(info).toBe(3);
    });
  });

  describe("When it renders with a list", () => {
    test("Then it should show a element with ul tag", () => {
      render(
        <>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </>
      );

      const info = screen.getByRole("list").innerHTML;

      expect(info).toContain("<li");
    });
  });

  describe("When it renders", () => {
    test("Then it shoul show a ul-list element", () => {
      render(
        <>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </>
      );

      const info = screen.getByRole("list");

      expect(info).toBeInTheDocument();
    });
  });

  describe("When it renders by click a link", () => {
    test("Then it should show one active link", () => {
      render(
        <>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </>
      );
      fireEvent.click(screen.getByRole("link", { name: "Create an Event" }));
      const event = screen.getByRole("link", {
        name: "Create an Event",
      }).innerHTML;

      expect(event).toContain("fa-solid fa-plus");
    });
  });
});
