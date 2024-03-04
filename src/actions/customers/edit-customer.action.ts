"use server";

import { ServerError } from "@/types/misc/server-error.type";
import { editCustomerService } from "@/services/customers/edit-customer.service";
import { EditCustomerDto } from "@/types/dto/customers/edit-customer.dto.type";

export async function editCustomer(
  id: string,
  editCustomerDto: EditCustomerDto,
): Promise<void | ServerError> {
  try {
    await editCustomerService(id, editCustomerDto);
  } catch (e) {
    console.log(e);
    return {
      message: "Ha ocurrido un error inesperado actualizando al cliente.",
    };
  }
}
