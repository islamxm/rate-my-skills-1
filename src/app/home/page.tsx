import { HomePage } from "@/src/pages/homePage";
import { createStore } from "@/src/_app/providers/store/config";
import { movieApi } from "@/src/entites/movie";

const Page = async () => {
  const store = createStore();
  await store.dispatch(movieApi.endpoints.getNowPlayingMoviesList.initiate({}));
  await store.dispatch(movieApi.endpoints.getPopularMoviesList.initiate({}));
  await store.dispatch(movieApi.endpoints.getTopRatedMoviesList.initiate({}));
  await store.dispatch(movieApi.endpoints.getUpcomingMoviesList.initiate({}));

  const nowPlayingMovies =
    movieApi.endpoints.getNowPlayingMoviesList.select({})(store.getState()).data
      ?.pages[0].results || [];
  const popularMovies =
    movieApi.endpoints.getPopularMoviesList.select({})(store.getState()).data
      ?.pages[0].results || [];
  const topRatedMovies =
    movieApi.endpoints.getTopRatedMoviesList.select({})(store.getState()).data
      ?.pages[0].results || [];
  const upcomingMovies =
    movieApi.endpoints.getUpcomingMoviesList.select({})(store.getState()).data
      ?.pages[0].results || [];

  return (
    <HomePage
      data={{
        nowPlayingMovies,
        popularMovies,
        topRatedMovies,
        upcomingMovies,
      }}
    />
  );
};

export default Page;
