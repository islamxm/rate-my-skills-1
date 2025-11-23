declare global {
  type ReduxStoreType = import('./src/app/providers/store/config').ReduxStoreType
  type ReduxDispatchType = import('./src/app/providers/store/config').ReduxDispatchType
}
export {}