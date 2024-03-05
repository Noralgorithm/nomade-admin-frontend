"use server";

import { ServerError } from "@/types/misc/server-error.type";
import { editHotelPerNightService } from "@/services/hotels-per-night/edit-hotel-per-night.service";
import { EditHotelPerNightDto } from "@/types/dto/hotels-per-night/edit-hotel.dto.type";

export async function editHotelPerNight(
  id: string,
  editCustomerDto: EditHotelPerNightDto,
): Promise<void | ServerError> {
  try {
    await editHotelPerNightService(id, editCustomerDto);
  } catch (e) {
    return {
      message:
        "Ha ocurrido un error inesperado actualizando el servicio de hotel.",
    };
  }
}
