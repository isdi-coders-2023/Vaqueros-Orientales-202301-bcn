const useApi = () => {
  const loadEvents = async (keyword: string) => {
    try {
      const result = await fetch(
        `${process.env.REACT_APP_URL_API}&keyword=${keyword}!`
      );
      const events = await result.json();
      return events._embedded.events;
    } catch (error: unknown) {
      return (error as Error).message;
    }
  };
  return loadEvents;
};

export default useApi;
