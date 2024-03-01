"use server";

import { ServerError } from "@/types/misc/server-error.type";
import { CreateCustomerDto } from "@/types/dto/create-customer-dto.type";
import { createCustomerService } from "@/services/customers/create-customer.service";

export async function createCustomer(
  createCustomerDto: CreateCustomerDto,
): Promise<void | ServerError> {
  try {
    await createCustomerService(createCustomerDto);
  } catch (e) {
    return {
      message: "Ha ocurrido un error inesperado creando al cliente.",
    };
  }
}
