import { render, screen } from "@testing-library/react";
import { EventStructure } from "../../data/types";
import Event from "./Event";

const event: EventStructure = {
  name: "SuperBowl",
  id: "0",
  type: "",
  images: [{ url: "" }],
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

describe("Given a EventComponent", () => {
  describe("When it renders with a props called 'name'= 'SuperBowl'", () => {
    test("Then it should show 'SuperBowl'", () => {
      const name = "SuperBowl";

      render(<Event event={event} />);

      const info = screen.getByRole("heading", { name, level: 2 });

      expect(info).toBeInTheDocument();
    });
  });

  describe("When it renders with a props called 'image' with alt atribute ='2 quarterbacks between the superbowl logo'", () => {
    test("Then it should show an image with an text alternative '2 quarterbacks between the superbowl logo'", () => {
      const alternative = "2 quarterbacks between the superbowl logo";

      render(<Event event={event} />);

      const info = screen.getByAltText(alternative);

      expect(info).toBeInTheDocument();
    });
  });

  describe("When it renders with a props called 'cityName'='Phoenix'", () => {
    test("Then it should show 'Phoenix'", () => {
      const city = "Phoenix";

      render(<Event event={event} />);

      const info = screen.getByText(city);

      expect(info).toBeInTheDocument();
    });
  });
});
