import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyle from "./styles/GlobalStyle";
import EventsContextProvider from "./store/contexts/events/EventsContextProvider";
import UiContextProvider from "./store/contexts/ui/UiContextProvider";
import { RouterProvider } from "react-router";
import router from "./router/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UiContextProvider>
      <EventsContextProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </EventsContextProvider>
    </UiContextProvider>
  </React.StrictMode>
);
