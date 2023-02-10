import { useMemo, useReducer } from "react";
import uiReducer from "../../reducers/ui/uiReducer";
import UiContext from "./UiContext";

interface UiContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const UiContextProvider = ({
  children,
}: UiContextProviderProps): JSX.Element => {
  const [isLoading, dispatch] = useReducer(uiReducer, false);

  const value = useMemo(() => ({ isLoading, dispatch }), [isLoading, dispatch]);

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};
