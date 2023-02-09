import { EventsStructure } from "../../data/types";
import Event from "../Event/Event";

interface EventsListProps {
  events: EventsStructure;
}

const EventsList = ({ events }: EventsListProps): JSX.Element => {
  return (
    <ul className="event__list">
      {events.map((event) => (
        <li key={event.id}>
          <Event event={event} />
        </li>
      ))}
    </ul>
  );
};

export default EventsList;
