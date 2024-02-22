import { Customer } from "../entities/customer.type";

export type CreateCustomerPayload = Omit<Customer, "id">;
