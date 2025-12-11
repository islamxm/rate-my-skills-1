import { Typography } from "@mui/material";
import dayjs from "dayjs";
import { FC } from "react";

type Props = {
  value: string
}

export const ReleaseYear:FC<Props> = ({value}) => {
  return (
    <Typography
      sx={(theme) => ({ color: theme.palette.grey[100] })}
      variant={"body2"}
    >
      {dayjs(value).format("YYYY")}
    </Typography>
  );
};
