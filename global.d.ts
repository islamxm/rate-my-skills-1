declare global {
  type ReduxStoreType = import('./src/_app/providers/store/config').ReduxStoreType
  type ReduxDispatchType = import('./src/_app/providers/store/config').ReduxDispatchType
}
export {}