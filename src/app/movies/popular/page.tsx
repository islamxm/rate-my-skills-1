import { createStore } from "@/src/_app/providers/store/config";
import { movieApi } from "@/src/entites/movie";
import { PopularMoviesPage } from "@/src/pages/popularMoviesPage";

export default async function Page() {
  const store = createStore();
  await store.dispatch(movieApi.endpoints.getPopularMoviesList.initiate({}));
  const data = movieApi.endpoints.getPopularMoviesList.select({})(
    store.getState()
  ).data ?? { pages: [], pageParams: {} };

  return <PopularMoviesPage initialData={data.pages[0].results} />;
}
