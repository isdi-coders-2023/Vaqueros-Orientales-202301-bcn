export interface EventStructure {
  name: string;
  id: number;
  type: string;
  image: [{ url: string; width: number; height: number }];
  date: [];
  price: [min: number];
  location: string;
  address: { [{ string }] };

  time: string;
}

export type EventsStructure = EventStructure[];
