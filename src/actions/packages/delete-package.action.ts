"use server";

import { deletePackageService } from "@/services/packages/delete-package.service";
import { ServerError } from "@/types/misc/server-error.type";

export async function deletePackage(id: string): Promise<void | ServerError> {
  try {
    await deletePackageService(id);
  } catch (e) {
    return {
      message: "Ha ocurrido un error inesperado eliminando el paquete.",
    };
  }
}
