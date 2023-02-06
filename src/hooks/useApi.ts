const useApi = () => {
  const loadEvents = async (keyword: string) => {
    const API_KEY = `DxSOpYSZ4nVwPWsGOWdELH14DJA5EIYL`;
    const API_BASE = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&countryCode=ES`;

    try {
      const result = await fetch(`${API_BASE}&keyword=${keyword}`);
      const events = await result.json();
      return events._embedded.events;
    } catch (err) {
      return null;
    }
  };
  return loadEvents;
};

export default useApi;
