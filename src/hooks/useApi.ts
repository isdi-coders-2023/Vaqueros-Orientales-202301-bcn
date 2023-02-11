import { ApiResponseStructure, EventStructure } from "../data/types";
import EventsContext from "../store/contexts/events/EventsContext";
import { useContext, useCallback } from "react";
import {
  loadEventActionCreator,
  loadEventsActionCreator,
} from "../store/actions/events/eventsActionsCreators";

const useApi = () => {
  const {
    store: { dispatch, detailDistpatch },
  } = useContext(EventsContext);

  const apiKey = `apikey=${process.env.REACT_APP_API_KEY}`;
  const param = `${process.env.REACT_APP_API_PARAM}`;
  const country = `&countryCode=ES`;
  let url = `${process.env.REACT_APP_URL_API!}${param}${apiKey}${country}`;
  const loadEvents = useCallback(async () => {
    try {
      const result = await fetch(url);
      const events = (await result.json()) as ApiResponseStructure;
      dispatch(loadEventsActionCreator(events._embedded.events));
    } catch (error: unknown) {
      return (error as Error).message;
    }
  }, [dispatch, url]);

  const loadEvent = useCallback(
    async (id: string) => {
      const category = `${process.env.REACT_APP_CATEGORY}`;
      const format = `${process.env.REACT_APP_FORMAT}`;
      let urlDetail = `${process.env
        .REACT_APP_URL_API!}${category}${id}${format}${apiKey}`;
      try {
        const result = await fetch(urlDetail);
        const event = (await result.json()) as EventStructure;
        detailDistpatch(loadEventActionCreator(event));
      } catch (error: unknown) {
        return (error as Error).message;
      }
    },
    [detailDistpatch, apiKey]
  );

  return { loadEvents, loadEvent };
};

export default useApi;
