import { Department, Person } from "../model"

export const personsByDepartment = (department: Department, persons: Array<Person>) => {
  return persons.filter(person => person.known_for_department !== department);
}