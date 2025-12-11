"use client";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Movie } from "../../model";
import { FC, useState } from "react";
import { IMAGES_BASE_URL } from "@/src/shared/api";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { AdultBadge } from "../AdultBadge/AdultBadge";
import { RatingBadge } from "../RatingBadge/RatingBadge";
import dayjs from "dayjs";
import { GenresList } from "../GenresList/GenresList";
import { ReleaseYear } from "../ReleaseYear/ReleaseYear";
import { MovieTitle } from "../MovieTitle/MovieTitle";

type Props = Movie & {};

export const MovieCard: FC<Props> = ({
  title,
  vote_average = 7.6,
  backdrop_path,
  poster_path,
  overview,
  adult,
  genre_ids,
  release_date,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Paper
      sx={(theme) => ({
        height: "36rem",
        maxWidth: "25rem",
        width: "100%",
        flex: "0 0 auto",
        overflow: "hidden",
        position: "relative",
        scrollSnapAlign: "start",
      })}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        component={motion.div}
        animate={{
          scale: hover ? 1.2 : 1,
          transition: { type: "tween", duration: 0.4 },
        }}
        sx={{ width: "100%", height: "100%" }}
      >
        <Image
          src={`${IMAGES_BASE_URL}/w500${poster_path}`}
          alt=""
          width={282}
          height={360}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <AnimatePresence>
        {hover && (
          <Stack
            sx={{
              // background:"linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%)",
              p: "2rem",
              backdropFilter: "blur(.5rem)",
              background: "rgba(0,0,0, .7)",
              height: "100%",
              width: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            gap={".5rem"}
          >
            <RatingBadge value={vote_average} />
            {/* {adult && <AdultBadge />} */}
            <GenresList genres={genre_ids}/>
            <ReleaseYear value={release_date}/>
            <MovieTitle value={title}/>
          </Stack>
        )}
      </AnimatePresence>
    </Paper>
  );
};
