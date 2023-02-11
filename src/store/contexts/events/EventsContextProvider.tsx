import { useMemo, useReducer } from "react";
import { EventStructure } from "../../../data/types";
import eventReducer from "../../reducers/event/eventReducer";
import eventsReducer from "../../reducers/events/eventsReducer";
import EventsContext from "./EventsContext";

interface EventsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const EventsContextProvider = ({
  children,
}: EventsContextProviderProps): JSX.Element => {
  const [events, dispatch] = useReducer(eventsReducer, []);
  const [event, detailDistpatch] = useReducer(eventReducer, {
    name: "SuperBowl",
    id: "0",
    type: "",
    images: [
      { url: "", ratio: "" },
      { url: "", ratio: "" },
      { url: "", ratio: "" },
      { url: "", ratio: "" },
      { url: "beyonce.jpg", ratio: "" },
    ],
    _embedded: {
      venues: [
        {
          name: "",
          city: { name: "Phoenix" },
          country: { name: "" },
          address: { line1: "" },
        },
      ],
    },
    priceRanges: [{ min: 0 }],
    dates: { start: { localDate: "", localTime: "" } },
  } as EventStructure);

  const data = useMemo(
    () => ({
      store: {
        events,
        event,
        dispatch,
        detailDistpatch,
      },
    }),
    [event, events]
  );

  return (
    <EventsContext.Provider value={data}>{children}</EventsContext.Provider>
  );
};

export default EventsContextProvider;
