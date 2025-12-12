import { Movie, MovieCard } from "@/src/entites/movie";
import { Container } from "@/src/widgets/container";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { ScrollableHorizontalList } from "@/src/shared/ui";

type Props = {
  title: string;
  data: Array<Movie>;
  moreLink?: string;
};

export const HomeLimitedListSection: FC<Props> = ({
  title,
  data,
  moreLink,
}) => {

  return (
    <Box>
      <Container>
        <Stack gap={"2rem"}>
          <Stack
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
            gap={"1rem"}
          >
            <Typography variant={"h2"}>{title}</Typography>
            {moreLink && (
              <Button variant={"text"} component={Link} href={moreLink}>
                More
              </Button>
            )}
          </Stack>
          <ScrollableHorizontalList
            itemWidth={25}
            >
            {data.map((movie) => (
              <MovieCard {...movie} key={movie.id} />
            ))}
          </ScrollableHorizontalList>
        </Stack>
      </Container>
    </Box>
  );
};
