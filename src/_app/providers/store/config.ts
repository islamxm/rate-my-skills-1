import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/src/shared/api";

export const createStore = (preloadedState?: any) => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: true,
      }).concat(api.middleware);
    },
    preloadedState,
  });
};

export type ReduxStoreType = ReturnType<
  ReturnType<typeof createStore>["getState"]
>;
export type ReduxDispatchType = ReturnType<typeof createStore>["dispatch"];
