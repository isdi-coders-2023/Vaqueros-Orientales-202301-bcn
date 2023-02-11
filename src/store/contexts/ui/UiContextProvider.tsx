import { useMemo, useReducer } from "react";
import uiReducer from "../../reducers/ui/uiReducer";
import UiContext from "./UiContext";

interface UiContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UiContextProvider = ({
  children,
}: UiContextProviderProps): JSX.Element => {
  const [isLoading, dispatch] = useReducer(uiReducer, true);

  const value = useMemo(() => ({ isLoading, dispatch }), [isLoading]);

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

export default UiContextProvider;
