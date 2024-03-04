import { axiosInstance } from "@/config/axios";
import { BackendResponseDto } from "@/types/dto/backend-response.dto.type";
import { HotelPerNight } from "@/types/entities/hotel-per-night.type";
import { HttpStatusCode } from "axios";

export async function deleteHotelPerNightService(id: string) {
  const res = await axiosInstance.delete<BackendResponseDto<HotelPerNight>>(
    "/services/hotels-per-night",
    {
      validateStatus: (status) => status === HttpStatusCode.Ok,
    },
  );

  return res.data.data;
}
