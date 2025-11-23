import { configureStore } from "@reduxjs/toolkit"

export const createStore = (preloadedState?: any) => {
  return configureStore({
    reducer: {

    },
    preloadedState
  })
}


export type ReduxStoreType = ReturnType<ReturnType<typeof createStore>['getState']>
export type ReduxDispatchType = ReturnType<typeof createStore>['dispatch']