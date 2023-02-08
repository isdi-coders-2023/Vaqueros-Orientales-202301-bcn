import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://app.ticketmaster.com/discovery/v2/events.json",

    (request, response, context) => {
      const urlParameters = request.url.searchParams.getAll(
        "?apikey=DxSOpYSZ4nVwPWsGOWdELH14DJA5EIYL&countryCode=ES"
      );
      return response(
        context.status(200),
        context.json({
          urlParameters,
        })
      );
    }
  ),
];
