import { api } from "@/src/shared/api";
import {
  MovieDetailsSchema,
  ResponseGetMovieGenresListSchema
} from "./contracts";
import { objectToSearchParams } from "@/src/shared/lib";
import {
  API_ResponseGetNowPlayingMoviesList,
  API_ResponseGetPopularMoviesList,
  API_ResponseGetUpcomingMoviesList,
  API_ResponseGetTopRatedMoviesList,
  API_GetMoviesListInput,
} from "./model";

export const movieApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNowPlayingMoviesList: builder.infiniteQuery<API_ResponseGetNowPlayingMoviesList,Omit<API_GetMoviesListInput, "page">,number>({
      query: ({ queryArg: { language = "en", region }, pageParam = 1 }) => ({
        url: "movie/now_playing",
        params: {
          page: pageParam,
          language,
          region,
        },
      }),
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam(lastPage) {
          return lastPage.page < lastPage.total_pages
            ? lastPage.page + 1
            : undefined;
        },
      },
    }),
    getPopularMoviesList: builder.infiniteQuery<API_ResponseGetPopularMoviesList,Omit<API_GetMoviesListInput, "page">,number>({
      query: ({ queryArg: { language = "en", region }, pageParam = 1 }) => ({
        url: "movie/popular",
        params: {
          page: pageParam,
          language,
          region,
        },
      }),
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam(lastPage) {
          return lastPage.page < lastPage.total_pages
            ? lastPage.page + 1
            : undefined;
        },
      },
    }),
    getTopRatedMoviesList: builder.infiniteQuery<API_ResponseGetTopRatedMoviesList,Omit<API_GetMoviesListInput, "page">,number>({
      query: ({ queryArg: { language = "en", region }, pageParam = 1 }) => ({
        url: "movie/top_rated",
        params: {
          page: pageParam,
          language,
          region,
        },
      }),
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam(lastPage) {
          return lastPage.page < lastPage.total_pages
            ? lastPage.page + 1
            : undefined;
        },
      },
    }),
    getUpcomingMoviesList: builder.infiniteQuery<API_ResponseGetUpcomingMoviesList,Omit<API_GetMoviesListInput, "page">,number>({
      query: ({ queryArg: { language = "en", region }, pageParam = 1 }) => ({
        url: "movie/upcoming",
        params: {
          page: pageParam,
          language,
          region,
        },
      }),
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam(lastPage) {
          return lastPage.page < lastPage.total_pages
            ? lastPage.page + 1
            : undefined;
        },
      },
    }),
    getMovieGenres: builder.query({
      query: (body: {language?: string} = {language: "en"}) => ({
        url: "genre/movie/list" + objectToSearchParams(body)
      }),
      transformResponse: (res) => {
        try {
          return ResponseGetMovieGenresListSchema.parse(res)
        } catch(err) {
          console.log("INVALID API DATA", err)
        }
      }
    }),
    getMovieById: builder.query({
      query: (id: number) => ({
        url: `movie/${id}`
      }),
      transformResponse: (res) => {
        try {
          return MovieDetailsSchema.parse(res)
        } catch(err) {
          console.log("INVALID API DATA", err)
        }
      }
    }),
    
  }),
});
