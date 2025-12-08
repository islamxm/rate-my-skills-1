import { SxProps } from "@mui/material";
import { ElementType } from "react";

export type PropsWithClassName<T extends object = object> = {
  className?: string
} & T 

export type UIStatus = "idle" | "loading" | "success" | "error";

export type UIStatusFlags = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export type CustomizableMuiComponent<T extends object = object> = PropsWithClassName<{
  sx?: SxProps;
  compoenent?: ElementType;
} & T>