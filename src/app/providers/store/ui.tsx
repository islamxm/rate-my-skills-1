"use client";
import { Provider } from "react-redux";
import { createStore } from "./config";
import { FC, PropsWithChildren } from "react";

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = createStore();

  return <Provider store={store}>{children}</Provider>;
};
