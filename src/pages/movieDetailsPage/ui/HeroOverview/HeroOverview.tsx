import { Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const HeroOverview: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography sx={{ maxWidth: "70rem" }} variant="body1">
      {children}
    </Typography>
  );
};
