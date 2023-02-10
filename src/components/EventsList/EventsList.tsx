import { EventsStructure } from "../../data/types";
import Event from "../Event/Event";
import EventsListStyled from "./EventsListStyled";

interface EventsListProps {
  events: EventsStructure;
}

const EventsList = ({ events }: EventsListProps): JSX.Element => {
  return (
    <EventsListStyled>
      {events.map((event) => (
        <li key={event.id}>
          <Event event={event} />
        </li>
      ))}
    </EventsListStyled>
  );
};

export default EventsList;
