"use client";
import { Stack } from "@mui/material";
import { HomeLimitedListSection } from "../HomeLimitedListSection/HomeLimitedListSection";
import { FC } from "react";
import {
  getNowPlayingMoviesPage,
  getPopularMoviesPage,
  getTopRatedMoviesPage,
  getUpcomingMoviesPage,
  Movie,
} from "@/src/entites/movie";

type Props = {
  data: {
    nowPlayingMovies: Array<Movie>;
    popularMovies: Array<Movie>;
    topRatedMovies: Array<Movie>;
    upcomingMovies: Array<Movie>;
  };
};

export const HomePage: FC<Props> = ({ data }) => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    data;

  return (
    <Stack gap={"4rem"}>
      <HomeLimitedListSection
        title="Now Playing"
        data={nowPlayingMovies}
        moreLink={getNowPlayingMoviesPage()}
      />
      <HomeLimitedListSection
        title="Popular"
        data={popularMovies}
        moreLink={getPopularMoviesPage()}
      />
      <HomeLimitedListSection
        title="Top Rated"
        data={topRatedMovies}
        moreLink={getTopRatedMoviesPage()}
      />
      <HomeLimitedListSection
        title="Upcoming"
        data={upcomingMovies}
        moreLink={getUpcomingMoviesPage()}
      />
    </Stack>
  );
};
