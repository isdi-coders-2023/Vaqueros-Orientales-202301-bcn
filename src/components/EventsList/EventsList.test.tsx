import { render, screen } from "@testing-library/react";
import { EventsStructure } from "../../data/types";
import EventsList from "./EventsList";

describe("Given a EventList Component", () => {
  describe("When it renders a event list with 1 item", () => {
    test("Then it should show a list element", () => {
      const eventsList: EventsStructure = [
        {
          name: "Lady Gaga",
          id: "",
          type: "",
          images: [{ url: "" }],
          _embedded: {
            venues: [
              {
                name: "",
                city: { name: "" },
                country: { name: "" },
                address: { line1: "" },
              },
            ],
          },
          priceRanges: [{ min: 12 }],
          dates: { start: { localDate: "", localTime: "" } },
        },
      ];

      render(<EventsList events={eventsList} />);

      const info = screen.getByRole("list");

      expect(info).toBeInTheDocument();
    });
  });
  describe("When it renders with 2 events", () => {
    test("Then it should show a list of 2 events", () => {
      const eventsList: EventsStructure = [
        {
          name: "Lady Gaga",
          id: "",
          type: "",
          images: [{ url: "" }],
          _embedded: {
            venues: [
              {
                name: "",
                city: { name: "" },
                country: { name: "" },
                address: { line1: "" },
              },
            ],
          },
          priceRanges: [{ min: 12 }],
          dates: { start: { localDate: "", localTime: "" } },
        },
        {
          name: "Opera",
          id: "",
          type: "",
          images: [{ url: "" }],
          _embedded: {
            venues: [
              {
                name: "",
                city: { name: "" },
                country: { name: "" },
                address: { line1: "" },
              },
            ],
          },
          priceRanges: [{ min: 300 }],
          dates: { start: { localDate: "", localTime: "" } },
        },
      ];
      render(<EventsList events={eventsList} />);

      const info = screen.getAllByRole("listitem").length;

      expect(info).toBe(2);
    });
  });
});
