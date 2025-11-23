"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { styleConfig, cahceProviderOptions } from "./config";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { FC, PropsWithChildren } from "react";

export const StyleProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppRouterCacheProvider options={cahceProviderOptions}>
      <ThemeProvider theme={styleConfig}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
