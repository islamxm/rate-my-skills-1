import { z } from "zod";
import {
  MovieSchema,
  ResponseGetNowPlayingMoviesListSchema,
  ResponseGetPopularMoviesListSchema,
  ResponseGetTopRatedMoviesListSchema,
  ResponseGetUpcomingMoviesListSchema,
  ResponseGetMovieGenresListSchema,
  MovieDetailsSchema,
  ProductionCompanySchema
} from "./contracts";

export type MovieDto = z.infer<typeof MovieSchema>;
export type Movie = MovieDto;

export type API_ResponseGetNowPlayingMoviesList = z.infer<typeof ResponseGetNowPlayingMoviesListSchema>;
export type API_ResponseGetPopularMoviesList = z.infer<typeof ResponseGetPopularMoviesListSchema>;
export type API_ResponseGetTopRatedMoviesList = z.infer<typeof ResponseGetTopRatedMoviesListSchema>
export type API_ResponseGetUpcomingMoviesList = z.infer<typeof ResponseGetUpcomingMoviesListSchema>;
export type API_ResponseGetMovieGenresList = z.infer<typeof ResponseGetMovieGenresListSchema>;

export type API_GetMoviesListInput = {
  language?: string;
  page?: number;
  region?: string;
};

export type MovieDetailsDto = z.infer<typeof MovieDetailsSchema>;
export type MovieDetails = MovieDetailsDto;

export type ProductionCompanyDto = z.infer<typeof ProductionCompanySchema>;
export type ProductionCompany = ProductionCompanyDto;
