import { axiosInstance } from "@/config/axios";
import { BackendResponseDto } from "@/types/dto/backend-response.dto.type";
import { PaginationParamsDto } from "@/types/dto/pagination-params.dto.type";
import { PaginatedItemsDto } from "@/types/dto/pagination.dto.type";
import { Package } from "@/types/entities/package.type";
import { HttpStatusCode } from "axios";

export async function fetchPackagesService({
  page,
  perPage,
}: PaginationParamsDto): Promise<PaginatedItemsDto<Package>> {
  const res = await axiosInstance.get<
    BackendResponseDto<PaginatedItemsDto<Package>>
  >("/packages", {
    params: {
      page,
      perPage,
    },
    validateStatus: (status) => status === HttpStatusCode.Ok,
  });

  return res.data.data;
}
