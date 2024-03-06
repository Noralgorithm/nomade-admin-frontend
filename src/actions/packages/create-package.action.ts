"use server";

import { createPackageService } from "@/services/packages/create-package.service";
import { CreatePackageDto } from "@/types/dto/packages/create-package.dto.type";
import { ServerError } from "@/types/misc/server-error.type";

export async function createPackage(
  createPackageDto: CreatePackageDto,
): Promise<void | ServerError> {
  try {
    await createPackageService(createPackageDto);
  } catch (e: unknown) {
    console.log(e);
    return {
      message: "Ha ocurrido un error inesperado creando el paquete.",
    };
  }
}
