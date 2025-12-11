import { getMoviesPage } from "@/src/shared/routes";

export const getNowPlayingMoviesPage = () => `${getMoviesPage()}/now_playing`;
export const getPopularMoviesPage = () => `${getMoviesPage()}/popular`;
export const getTopRatedMoviesPage = () => `${getMoviesPage()}/top_rated`;
export const getUpcomingMoviesPage = () => `${getMoviesPage()}/upcoming`;