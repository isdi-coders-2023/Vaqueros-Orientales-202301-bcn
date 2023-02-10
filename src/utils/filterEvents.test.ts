import { EventsStructure } from "../data/types";
import { filterRepeteadEvents } from "./filterEvents";

describe("Given the filterEvents function", () => {
  describe("When it's recieves a list with repeated photos events", () => {
    test("Then it should return a list with no repeated events", () => {
      const events: EventsStructure = [
        {
          name: "Beyonce",
          id: "3",
          type: "",
          images: [
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "", ratio: "" },
            { url: "beyonce.jpg", ratio: "" },
          ],

          _embedded: {
            venues: [
              {
                name: "",
                city: { name: "" },
                country: { name: "" },
                address: { line1: "" },
              },
              {
                name: "Beyoce",
                id: "500",
                type: "",
                images: [
                  { url: "", ratio: "" },
                  { url: "", ratio: "" },
                  { url: "", ratio: "" },
                  { url: "", ratio: "" },
                  { url: "beyonce.jpg", ratio: "" },
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
            ],
          },
          priceRanges: [{ min: 300 }],
          dates: { start: { localDate: "", localTime: "" } },
        },
      ];

      const expectedEventList = filterRepeteadEvents(events);
      expect(expectedEventList).toHaveLength(1);
    });
  });
});
