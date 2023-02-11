const isLoading = true;

export const uiDispatch: React.Dispatch<any> = jest.fn();

export const uiMockStore = { dispatch: uiDispatch, isLoading };

export const uiMockDispatch = jest.spyOn(uiMockStore, "dispatch");
