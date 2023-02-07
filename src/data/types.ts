export interface EventStructure {
  name: string;
  id: number;
  type: string;
  image: string;
  address: string;
  price: number;
  location: string;

  time: string;
}

export type EventsStructure = EventStructure[];
