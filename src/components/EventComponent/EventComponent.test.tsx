import { render, screen } from "@testing-library/react";
import { EventStructure } from "../../data/types";
import EventComponent from "./EventComponent";

describe("Given a EventComponent", () => {
  describe("When it renders with a props called 'name'= SuperBowl", () => {
    test("Then it should show 'SuperBowl'", () => {
      const event: EventStructure = {
        name: "SuperBowl",
        id: "0",
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
        priceRanges: [{ min: 0 }],
        dates: { start: { localDate: "", localTime: "" } },
      };
      const name = "SuperBowl";

      render(<EventComponent name={event.name} image={""} />);

      const info = screen.getByRole("heading", { name, level: 2 });

      expect(info).toBeInTheDocument();
    });
  });

  describe("When it renders with a props called 'image' with alt atribute ='2 quarterbacks between the superbowl logo'", () => {
    test("Then it should show an image with an text alternative '2 quarterbacks between the superbowl logo'", () => {
      const alternative = "2 quarterbacks between the superbowl logo";

      render(<EventComponent name="" image="" />);

      const info = screen.getByAltText(alternative);

      expect(info).toBeInTheDocument();
    });
  });
});
