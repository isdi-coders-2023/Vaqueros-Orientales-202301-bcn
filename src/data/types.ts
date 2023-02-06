export interface EventStructure {
  id: number;
  name: string;
  image: string;
  price: number;
  address: string;
  location: string;
  time: string;
}

export type EventsStructure = EventStructure[];
