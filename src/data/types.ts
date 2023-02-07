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
    events: [EventStructure];
  };
}

export type EventsStructure = EventStructure[];
