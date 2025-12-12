import { createStore } from "@/src/_app/providers/store/config";
import { movieApi } from "@/src/entites/movie";
import { UpcomingMoviesPage } from "@/src/pages/upcomingMoviesPage";

export default async function Page() {
  const store = createStore();
  await store.dispatch(movieApi.endpoints.getUpcomingMoviesList.initiate({}));
  const data = movieApi.endpoints.getUpcomingMoviesList.select({})(
    store.getState()
  ).data ?? { pages: [], pageParams: {} };

  return <UpcomingMoviesPage initialData={data.pages[0].results} />;
}
