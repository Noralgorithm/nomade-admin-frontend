"use server";

import { ServerError } from "@/types/misc/server-error.type";
import { editPackageService } from "@/services/packages/edit-package.service";
import { EditPackageDto } from "@/types/dto/packages/edit-package.dto.type";

export async function editPackage(
  id: string,
  editPackageDto: EditPackageDto,
): Promise<void | ServerError> {
  try {
    await editPackageService(id, editPackageDto);
  } catch (e) {
    console.log(e);
    return {
      message: "Ha ocurrido un error inesperado actualizando el paquete.",
    };
  }
}
