export { MovieCard } from "./ui/MovieCard/ui";
export type { Movie, MovieDetails } from "./model";
export { movieApi } from "./api";
export { AdultBadge } from "./ui/AdultBadge/AdultBadge";
export { RatingBadge } from "./ui/RatingBadge/RatingBadge";
export { ProductionCompanyBadge } from "./ui/ProductionCompanyBadge/ProductionCompanyBadge";
export { GenresList } from "./ui/GenresList/GenresList";
export { ProductionCompaniesList } from "./ui/ProductionCompaniesList/ProductionCompaniesList";

export {
  getTopRatedMoviesPage,
  getNowPlayingMoviesPage,
  getPopularMoviesPage,
  getUpcomingMoviesPage,
} from "./routes";
