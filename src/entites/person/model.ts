import { z } from "zod";
import { DepartmentSchema, PersonSchema, ResponseGetPersonsByMovieSchema } from "./contracts";


export type Department = z.infer<typeof DepartmentSchema>;
export type PersonDto = z.infer<typeof PersonSchema>;
export type Person = PersonDto;

export type API_ResponseGetPersonsByMovie = z.infer<typeof ResponseGetPersonsByMovieSchema>;

