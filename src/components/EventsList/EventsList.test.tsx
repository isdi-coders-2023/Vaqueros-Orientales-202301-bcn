import { render, screen } from "@testing-library/react";
import { EventsStructure } from "../../data/types";
import EventsList from "./EventsList";

describe("Given a EventList Component", () => {
  describe("When it is rendered and it receives a list of 1 item", () => {
    test("Then it should show a list element", () => {
      const eventsList: EventsStructure = [
        {
          name: "Lady Gaga",
          id: "1",
          type: "",
          images: [
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
          ],
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

      const title = "Lady Gaga";

      const info = screen.getByRole("heading", { name: title });

      expect(info).toBeInTheDocument();
    });
  });
  describe("When it is rendered and it receives a list of 2 events", () => {
    test("Then it should show a list of 2 events", () => {
      const eventsList: EventsStructure = [
        {
          name: "Lady Gaga",
          id: "2",
          type: "",
          images: [
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
          ],

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
          id: "3",
          type: "",
          images: [
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
          ],

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

  describe("When it renders with 0 events", () => {
    test("Then it shouldn't show any heading", () => {
      const eventList: EventsStructure = [];

      render(<EventsList events={eventList} />);

      expect(eventList).toHaveLength(0);
    });
  });
});
