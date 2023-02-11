import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import EventsContextProvider from "./store/contexts/events/EventsContextProvider";
import UiContextProvider from "./store/contexts/ui/UiContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UiContextProvider>
      <EventsContextProvider>
        <GlobalStyle />
        <App />
      </EventsContextProvider>
    </UiContextProvider>
  </React.StrictMode>
);
