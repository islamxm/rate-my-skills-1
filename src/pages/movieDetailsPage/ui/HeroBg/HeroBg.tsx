import { Movie } from "@/src/entites/movie";
import { IMAGES_BASE_URL } from "@/src/shared/api";
import { alpha, Box } from "@mui/material";
import { FC } from "react";

type Props = Pick<Movie, "backdrop_path">;

export const HeroBg: FC<Props> = ({ backdrop_path }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${IMAGES_BASE_URL}/w780${backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={(theme) => ({
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          background: `linear-gradient(0deg,${alpha(
            theme.palette.background.default,
            1
          )} 15%, ${alpha(theme.palette.background.default, 0.3)} 100%)`,
        })}
      />
    </Box>
  );
};
