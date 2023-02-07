import { render, screen } from "@testing-library/react";
import EventComponent from "./EventComponent";
import EventComponentStructure from "./types";

describe("Given a EventComponent", () => {
  describe("When it renders with a props called 'name'= SuperBowl", () => {
    test("Then it should show 'SuperBowl'", () => {
      const event: EventComponentStructure = {
        name: "SuperBowl",
        id: 0,
        type: "",
        image: "",
        address: "",
        price: 0,
        location: "",
        time: "",
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
