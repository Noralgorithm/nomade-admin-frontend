import { Customer } from "../../entities/customer.type";

export interface CreateCustomerDto extends Omit<Customer, "id"> {}
