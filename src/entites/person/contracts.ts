import { z } from "zod";

export const DepartmentSchema = z.literal([
  "Acting",
  "Directing",
  "Production",
  "Writing",
  "Camera",
  "Editing",
  "Sound",
  "Art",
  "Costume & Make-Up",
  "Visual Effects",
  "Lighting",
]);

export const PersonSchema = z.object({
  id: z.number(),
  adult: z.boolean(),
  also_known_as: z.array(z.string()),
  biography: z.string(),
  birthday: z.string(),
  deathday: z.string().nullable(),
  gender: z.number(), //New Schema
  homepage: z.string().nullable(),
  imdb_id: z.string(),
  known_for_department: DepartmentSchema,
  name: z.string(),
  place_of_birth: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
});

export const MoviePersonSchema = z.object({
  adult: z.boolean(),
  gender: z.number(), //New Schema
  id: z.number(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string().optional(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
  cast_id: z.number().optional(),
  character: z.string().optional(),
  credit_id: z.string(),
  order: z.number().optional(),
});

export const ResponseGetPersonsByMovieSchema = z.object({
  id: z.number(),
  cast: z.array(MoviePersonSchema),
  crew: z.array(MoviePersonSchema),
});
