import { axiosInstance } from "@/config/axios";
import { BackendResponseDto } from "@/types/dto/backend-response.dto.type";
import { PaginationParamsDto } from "@/types/dto/pagination-params.dto.type";
import { PaginatedItemsDto } from "@/types/dto/pagination.dto.type";
import { HotelPerNight } from "@/types/entities/hotel-per-night.type";
import { HttpStatusCode } from "axios";

export async function fetchHotelPerNightService({
  page,
  perPage,
}: PaginationParamsDto): Promise<PaginatedItemsDto<HotelPerNight>> {
  const res = await axiosInstance.get<
    BackendResponseDto<PaginatedItemsDto<HotelPerNight>>
  >("/services/hotels-per-night", {
    params: {
      page,
      perPage,
    },
    validateStatus: (status) => status === HttpStatusCode.Ok,
  });

  return res.data.data;
}
