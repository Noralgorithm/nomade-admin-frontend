import type { Person } from "./person.type";

export interface Employee extends Person {
  salary: string;
  occupation: string;
}
