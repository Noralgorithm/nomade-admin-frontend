"use server";

import { createHotelPerNightService } from "@/services/hotels-per-night/create-hotel-per-night.service";
import { CreateHotelPerNightDto } from "@/types/dto/hotels-per-night/create-hotel.dto.type";
import { ServerError } from "@/types/misc/server-error.type";
import { AxiosError } from "axios";

export async function createHotelPerNight(
  createHotelPerNightDto: CreateHotelPerNightDto,
): Promise<void | ServerError> {
  try {
    await createHotelPerNightService(createHotelPerNightDto);
  } catch (e: unknown) {
    return {
      message: "Ha ocurrido un error inesperado creando el servicio de hotel.",
    };
  }
}
