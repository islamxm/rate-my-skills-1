import { createStore } from "@/src/_app/providers/store/config";
import { movieApi } from "@/src/entites/movie";
import { MovieDetailsPage } from "@/src/pages/movieDetailsPage/ui";

export default async function Page({
  params,
}: {
  params: Promise<{ movie: number }>;
}) {
  const { movie } = await params;
  const store = createStore();
  const response = store.dispatch(movieApi.endpoints.getMovieById.initiate(movie));
  await response.unwrap();
  const data = movieApi.endpoints.getMovieById.select(movie)(
    store.getState()
  ).data;

  return <MovieDetailsPage data={data} />;
}
