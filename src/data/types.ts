export interface EventStructure {
  name: string;
  id: number;
  type: string;
  url: string;
  address: string;
  city: string;
  country: string;
  price: number;
  date: string;
  time: string;
}

export interface ApiResponseStructure {
  _embedded: {
    events: [
      {
        name: string;
        id: number;
        type: string;
        url: { images: { url: string } };
        address: { _embedded: [venues: { name: string }] };
        city: { _embedded: [venues: { city: { name: string } }] };
        country: { _embedded: [venues: { country: string }] };
        price: [priceRanges: { min: number }];
        date: { start: { localDate: number } };
        time: { start: { localTime: number } };
      }
    ];
  };
}

export type EventsStructure = EventStructure[];
