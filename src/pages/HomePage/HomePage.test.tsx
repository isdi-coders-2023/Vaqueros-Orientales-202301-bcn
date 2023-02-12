import { render, screen } from "@testing-library/react";
import EventsContextProvider from "../../store/contexts/events/EventsContextProvider";
import HomePage from "../HomePage/HomePage";

describe("Given the Home page", () => {
  describe("When it renders", () => {
    test("Then it should show the title 'FindEvents'", () => {
      const pageName = "FindEvents";
      render(
        <EventsContextProvider>
          <HomePage />
        </EventsContextProvider>
      );
      const title = screen.getByRole("heading", { name: pageName });
      expect(title).toBeInTheDocument();
    });
  });
});
