import { Customer } from "../entities/customer.type";

export type CreateCustomerDto = Omit<Customer, "id">;
