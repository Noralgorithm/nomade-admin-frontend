"use server";

import { ServerError } from "@/types/misc/error.type";
import { CreateCustomerPayload } from "@/types/payloads/create-customer-payload";

export async function createCustomer(
  _payload: CreateCustomerPayload,
): Promise<void | ServerError> {
  return new Promise((exec) => {
    setTimeout(() => exec({ message: "Error creando al usuario" }), 2000);
  });
}
