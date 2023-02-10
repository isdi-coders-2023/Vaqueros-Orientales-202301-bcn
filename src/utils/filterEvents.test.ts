import { EventsStructure } from "../data/types";
import { filterRepeteadEvents } from "./filterEvents";

describe("Given the filterEvents function", () => {
  describe("When it's recieves a list with repeated photos events", () => {
    test("Then it should return a list with no repeated events", () => {
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
            { url: "lady.jpg", ratio: "" },
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
          name: "Lady Gaga",
          id: "300",
          type: "",
          images: [
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "lady.jpg", ratio: "" },
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

      const expectedEventList = filterRepeteadEvents(eventsList);
      expect(expectedEventList).toHaveLength(1);
    });
  });
});
