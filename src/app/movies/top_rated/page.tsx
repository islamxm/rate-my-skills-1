import { createStore } from "@/src/_app/providers/store/config";
import { movieApi } from "@/src/entites/movie";
import { TopRatedMoviesPage } from "@/src/pages/topRatedMoviesPage";

export default async function Page() {
  const store = createStore();
  await store.dispatch(movieApi.endpoints.getTopRatedMoviesList.initiate({}));
  const data = movieApi.endpoints.getTopRatedMoviesList.select({})(
    store.getState()
  ).data ?? { pages: [], pageParams: {} };

  return <TopRatedMoviesPage initialData={data.pages[0].results} />;
}
