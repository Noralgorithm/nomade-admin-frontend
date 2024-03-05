import { axiosInstance } from "@/config/axios";
import { BackendResponseDto } from "@/types/dto/backend-response.dto.type";
import { EditHotelPerNightDto } from "@/types/dto/hotels-per-night/edit-hotel.dto.type";
import { HotelPerNight } from "@/types/entities/hotel-per-night.type";
import { HttpStatusCode } from "axios";

export async function editHotelPerNightService(
  id: string,
  editHotelPerNight: EditHotelPerNightDto,
): Promise<HotelPerNight> {
  const res = await axiosInstance.patch<BackendResponseDto<HotelPerNight>>(
    `/services/hotels-per-night/${id}`,
    editHotelPerNight,
    {
      validateStatus: (status) => status === HttpStatusCode.Ok,
    },
  );

  return res.data.data;
}
