import { api } from "@/src/shared/api";
import { ResponseGetPersonsByMovieSchema } from "./contracts";

export const personApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPersonById: builder.query({
      query: (personId: number) => ({
        url: `person/${personId}`
      })
    }),
    getPersonsByMovie: builder.query({
      query: (movieId: number) => ({
        url: `movie/${movieId}/credits`
      }),
      transformResponse: (res) => {
        try {
          return ResponseGetPersonsByMovieSchema.parse(res)
        } catch(err) {
          console.log(err)
        }
      }
    })
  })
})