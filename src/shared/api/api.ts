import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, API_BASE_URL } from "./envKeys";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Cache-Control', 'no-cache');
      headers.set("Authorization", `Bearer ${API_KEY}`)
      return headers
    }
  }),
  endpoints: () => ({}),
});
