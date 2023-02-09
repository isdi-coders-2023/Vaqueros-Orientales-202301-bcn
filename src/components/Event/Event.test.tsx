import { render, screen } from "@testing-library/react";
import { EventStructure } from "../../data/types";
import Event from "./Event";

const event: EventStructure = {
  name: "SuperBowl",
  id: "0",
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
        city: { name: "Phoenix" },
        country: { name: "" },
        address: { line1: "" },
      },
    ],
  },
  priceRanges: [{ min: 0 }],
  dates: { start: { localDate: "", localTime: "" } },
};

describe("Given a Component Event", () => {
  describe("When its rendered with the SuperBowl event", () => {
    test("Then it should show the title 'SuperBowl'", () => {
      const name = "SuperBowl";

      render(<Event event={event} />);

      const info = screen.getByRole("heading", { name, level: 2 }).innerHTML;

      expect(info).toContain(name);
    });

    test("Then it should show an image with an alternative text that says 'SuperBowl'", () => {
      render(<Event event={event} />);

      const info = screen.getByAltText(event.name);

      expect(info).toBeInTheDocument();
    });
  });

  describe("When its rendered with an event that happens in the city of Phoenix", () => {
    test("Then it should show 'Phoenix'", () => {
      const city = "Phoenix";

      render(<Event event={event} />);

      const info = screen.getByText(city);

      expect(info).toBeInTheDocument();
    });
  });
});
