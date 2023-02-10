import { EventsStructure } from "../data/types";

export const filterRepeteadEvents = (
  data: EventsStructure
): EventsStructure => {
  const eventsImage: string[] = [];
  const events: EventsStructure = [];

  data.forEach((event) => {
    if (!eventsImage.includes(event.images[3].url)) {
      eventsImage.push(event.images[3].url);
      events.push(event);
    }
  });

  return events;
};
