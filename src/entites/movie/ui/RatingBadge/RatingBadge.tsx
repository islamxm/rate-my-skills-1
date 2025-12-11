import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { RxStarFilled } from "react-icons/rx";

type Props = {
  value: number;
};

const getLevelColor = (value: number) => {
  if(value < 5) {
    return "#eb7878";
  }
  if(value >= 5 && value < 7) {
    return "#ebe578";
  }
  if(value >= 7) {
    return "#78eb7b"
  }
}

export const RatingBadge: FC<Props> = ({ value }) => {
  const [int, frac] = value.toFixed(1).toString().split(".");


  return (
    <Box component={"span"}>
      {/* <RxStarFilled /> */}
      <Box component={"span"} sx={{
        color: getLevelColor(value),
        lineHeight: "100%"
      }}>
        <Typography
          variant={"caption"}
          sx={{ fontSize: "4rem", fontWeight: 600, lineHeight: "100%" }}
        >
          {int}
        </Typography>
        {Number(frac) > 0 && (
          <Typography
            variant={"caption"}
            sx={{ fontSize: "3rem", fontWeight: 600, lineHeight: "100%" }}
          >
            .{frac}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
