import { axiosInstance } from "@/config/axios";
import { BackendResponseDto } from "@/types/dto/backend-response.dto.type";
import { CreateHotelPerNightDto } from "@/types/dto/hotels-per-night/create-hotel.dto.type";
import { HotelPerNight } from "@/types/entities/hotel-per-night.type";
import { HttpStatusCode } from "axios";

export async function createHotelPerNightService(
  hotelPerNightDto: CreateHotelPerNightDto,
): Promise<HotelPerNight> {
  const res = await axiosInstance.post<BackendResponseDto<HotelPerNight>>(
    "/services/hotels-per-night",
    hotelPerNightDto,
    {
      validateStatus: (status) => status === HttpStatusCode.Created,
    },
  );

  return res.data.data;
}
