"use client";
import { ScrollableHorizontalList } from "@/src/shared/ui";
import { FC } from "react";
import { PersonAvatar } from "../PersonAvatar/PersonAvatar";
import { personApi } from "../../api";
import { Department } from "../../model";

type Props = {
  movieId: number;
  avatarSize?: number,
  departmentFilter?: Department
};

// продумать получения init data SSR
export const PersonsList: FC<Props> = ({ movieId, avatarSize, departmentFilter }) => {
  const { data, isError, isSuccess, isLoading } =
    personApi.useGetPersonsByMovieQuery(movieId);
  // показать скелетон
  // if(!data) {
  //   return null
  // }
  const persons = (departmentFilter ? data?.cast.filter(person => person.known_for_department === departmentFilter) : data?.cast) || [];
  return (
    <ScrollableHorizontalList itemWidth={Number(avatarSize)}>
      {persons.map((person) => (
        <PersonAvatar
          data={{
            profile_path: person.profile_path,
            id: person.id,
            name: person.name,
          }}
          key={person.id}
          size={avatarSize}
        />
      ))}
    </ScrollableHorizontalList>
  );
};
