import { useMemo, useReducer } from "react";
import uiReducer from "../../reducers/ui/uiReducer";
import uiContext from "./UiContext";

interface UiContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const UiContextProvider = ({
  children,
}: UiContextProviderProps): JSX.Element => {
  const [isLoading, dispatch] = useReducer(uiReducer, false);

  const value = useMemo(() => ({ isLoading, dispatch }), [isLoading, dispatch]);

  return <uiContext.Provider value={value}>{children}</uiContext.Provider>;
};
