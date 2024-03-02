"use server";

import { deleteCustomerService } from "@/services/customers/delete-customer.service";
import { ServerError } from "@/types/misc/server-error.type";

export async function deleteCustomer(id: string): Promise<void | ServerError> {
  try {
    await deleteCustomerService(id);
  } catch (e) {
    return {
      message: "Ha ocurrido un error inesperado eliminando al cliente.",
    };
  }
}
