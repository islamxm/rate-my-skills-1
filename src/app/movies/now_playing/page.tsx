import { createStore } from "@/src/_app/providers/store/config";
import { movieApi } from "@/src/entites/movie";
import { NowPlayingMoviesPage } from "@/src/pages/nowPlayingMoviesPage";

export default async function Page() {
  const store = createStore();
  await store.dispatch(movieApi.endpoints.getNowPlayingMoviesList.initiate({}));
  const data = movieApi.endpoints.getNowPlayingMoviesList.select({})(
    store.getState()
  ).data ?? { pages: [], pageParams: {} };

  return <NowPlayingMoviesPage initialData={data.pages[0].results} />;
}
