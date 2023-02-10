export interface EventStructure {
  name: string;
  id: string;
  type: string;
  images: [
    ImageStructure,
    ImageStructure,
    ImageStructure,
    ImageStructure,
    ImageStructure
  ];
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

export interface ImageStructure {
  ratio: string;
  url: string;
}

export type ImagesStructure = ImageStructure[];

export type EventsStructure = EventStructure[];
