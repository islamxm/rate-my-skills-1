import { GenresList, MovieDetails } from "@/src/entites/movie";
import { Container } from "@/src/widgets/container";
import { Stack } from "@mui/material";
import { FC } from "react";
import { HeroTitle } from "../HeroTitle/HeroTitle";
import { HeroOverview } from "../HeroOverview/HeroOverview";

type Props = MovieDetails;

export const HeroContent: FC<Props> = ({
  title,
  genres,
  overview,
  homepage
}) => {
  return (
    <Container
      sx={{ pb: "5rem", height: "100%", position: "relative", zIndex: 2 }}
    >
      <Stack gap={"2rem"} sx={{ height: "100%" }} justifyContent={"flex-end"}>
        <GenresList genres={genres.map((g) => g.id)} />
        <HeroTitle title={title} link={homepage}/>
        <HeroOverview>{overview}</HeroOverview>
      </Stack>
    </Container>
  );
};
