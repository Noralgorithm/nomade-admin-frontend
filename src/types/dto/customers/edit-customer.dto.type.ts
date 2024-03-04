import { Customer } from "@/types/entities/customer.type";

export interface EditCustomerDto extends Omit<Customer, "id"> {}
