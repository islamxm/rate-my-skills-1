"use client";
import { Movie, movieApi, MovieCard } from "@/src/entites/movie";
import { Container } from "@/src/widgets/container";
import { InfiniteList } from "@/src/widgets/infiniteList/ui/InfiniteList/InfiniteList";
import { ScrollableHorizontalList } from "@/src/widgets/scrollableHorizontalList";
import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  initialData: Array<Movie>;
};

export const NowPlayingMoviesPage: FC<Props> = ({ initialData }) => {
  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    fetchNextPage,
    hasNextPage,
  } = movieApi.useGetNowPlayingMoviesListInfiniteQuery(
    {},
    { initialPageParam: initialData.length > 0 ? 2 : 1 }
  );

  const list = [initialData, ...data?.pages.map(p => p.results) || []]

  return (
    <Box>
      <Container>
        <Stack gap={"3rem"}>
          <Typography variant="h1">Now Playing</Typography>
          <InfiniteList
            isLoading={isLoading}
            isFetching={isFetching}
            isSuccess={isSuccess}
            isError={isError}
            onLoadMore={fetchNextPage}
            canLoadMore={hasNextPage}
            hasInitData={initialData.length > 0}
          >
            {list.map((page, pageIndex) => (
              <ScrollableHorizontalList key={pageIndex} itemWidth={25}>
                {page?.map(movie => (
                  <MovieCard {...movie} key={movie.id}/>
                ))}
              </ScrollableHorizontalList>
            ))}
          </InfiniteList>
        </Stack>
      </Container>
    </Box>
  );
};
