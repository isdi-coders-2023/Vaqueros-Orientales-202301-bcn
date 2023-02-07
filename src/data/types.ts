export interface EventStructure {
  name: string;
  id: string;
  type: string;
  images: [{ url: string }];
  _embedded: {
    venues: [
      {
        name: string;
        city: { name: string };
        country: { name: string };
        address: { line1: string };
      }
    ];
  };
  priceRanges: [{ min: number }];
  dates: { start: { localDate: string; localTime: string } };
}

export interface ApiResponseStructure {
  _embedded: {
    events: EventsStructure;
  };
}

export type EventsStructure = EventStructure[];
