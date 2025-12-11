"use client";
import { movieApi } from "@/src/entites/movie";
import { FC, PropsWithChildren } from "react"

export const DataProvider:FC<PropsWithChildren> = ({
  children
}) => {
  movieApi.useGetMovieGenresQuery({})
  return children
}