"use client";
import { MovieDetails } from "@/src/entites/movie/model";
import { Box, Stack} from "@mui/material";
import { FC } from "react";
import { HeroBg } from "../HeroBg/HeroBg";
import { HeroContent } from "../HeroContent/HeroContent";

type Props = {
  data?: MovieDetails;
};

export const MovieDetailsPage: FC<Props> = ({ data }) => {
  console.log(data);
  
  if (!data) {
    return null;
  }

  return (
    <Stack>
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          width: "100vw",
        }}
      >
        <HeroBg backdrop_path={data.backdrop_path} />
        <HeroContent {...data} />
      </Box>
    </Stack>
  );
};
