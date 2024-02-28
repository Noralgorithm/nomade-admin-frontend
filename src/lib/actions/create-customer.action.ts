"use server";

import { ServerError } from "@/types/misc/server-error.type";
import { CreateCustomerDto } from "@/types/dto/create-customer-dto.type";

export async function createCustomer(
  _payload: CreateCustomerDto,
): Promise<void | ServerError> {
  return new Promise((exec) => {
    setTimeout(() => exec({ message: "Error creando al usuario" }), 2000);
  });
}
