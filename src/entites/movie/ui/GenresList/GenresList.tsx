"use client"
import { FC } from "react";
import { GenreBadge } from "../GenreBadge/GenreBadge";
import { Stack } from "@mui/material";
import { motion } from "motion/react";
import { movieApi } from "../../api";

type Props = {
  genres: Array<number>;
};

export const GenresList: FC<Props> = ({ genres }) => {
  const { data } = movieApi.useGetMovieGenresQuery({});

  if (data && data.genres.length > 0 && genres.length > 0) {
    return (
      <Stack
        gap={".5rem"}
        flexWrap={"wrap"}
        direction={"row"}
        component={motion.div}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.05,
              staggerChildren: 0.08,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {genres.map((genreId) => (
          <motion.div
            key={genreId}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <GenreBadge
              value={data.genres.find((g) => g.id === genreId)?.name || ""}
            />
          </motion.div>
        ))}
      </Stack>
    );
  }

  return null;
};
