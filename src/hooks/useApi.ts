import { ApiResponseStructure } from "../data/types";
import EventsContext from "../store/contexts/events/EventsContext";
import { useContext, useCallback } from "react";
import { loadEventsActionCreator } from "../store/actions/events/ActionsCreator";

const useApi = () => {
  const { dispatch } = useContext(EventsContext);

  const apiKey = `apikey=${process.env.REACT_APP_API_KEY}`;
  const url = `${process.env.REACT_APP_URL_API!}${apiKey}`;

  const loadEvents = useCallback(async () => {
    try {
      const result = await fetch(url!);
      const events = (await result.json()) as ApiResponseStructure;
      dispatch(loadEventsActionCreator(events._embedded.events));
    } catch (error: unknown) {
      return (error as Error).message;
    }
  }, [dispatch, url]);

  return { loadEvents };
};

export default useApi;
