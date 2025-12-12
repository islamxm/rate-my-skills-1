import { FC } from "react";
import { CircularProgress } from "@mui/material";

export const Spinner:FC = () => {
  return (
    <>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{'svg circle': { stroke: 'url(#my_gradient)', strokeLinecap: "round", r: 17, strokeWidth: 6  } }} />
    </>
  );
}