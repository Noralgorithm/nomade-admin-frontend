"use server";

import { deleteHotelPerNightService } from "@/services/hotels-per-night/delete-hotel-per-night.service";
import { ServerError } from "@/types/misc/server-error.type";

export async function deleteHotelPerNight(
  id: string,
): Promise<void | ServerError> {
  try {
    await deleteHotelPerNightService(id);
  } catch (e) {
    return {
      message:
        "Ha ocurrido un error inesperado eliminando el servicio de hotel.",
    };
  }
}
