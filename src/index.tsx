import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyle from "./styles/GlobalStyle";
import EventsContextProvider from "./store/contexts/events/EventsContextProvider";
import { RouterProvider } from "react-router";
import router from "./router/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <EventsContextProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </EventsContextProvider>
  </React.StrictMode>
);
