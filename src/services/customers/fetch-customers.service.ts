import { axiosInstance } from "@/config/axios";
import { BackendResponseDto } from "@/types/dto/backend-response.dto.type";
import { PaginationParamsDto } from "@/types/dto/pagination-params.dto.type";
import { PaginatedItemsDto } from "@/types/dto/pagination.dto.type";
import { Customer } from "@/types/entities/customer.type";
import { HttpStatusCode } from "axios";

export async function fetchCustomersService({
  page,
  perPage,
}: PaginationParamsDto): Promise<PaginatedItemsDto<Customer>> {
  const res = await axiosInstance.get<
    BackendResponseDto<PaginatedItemsDto<Customer>>
  >("/customers", {
    params: {
      page,
      perPage,
    },
    validateStatus: (status) => status === HttpStatusCode.Ok,
  });

  return res.data.data;
}
