import { axiosInstance } from "@/config/axios";
import { BackendResponseDto } from "@/types/dto/backend-response.dto.type";
import { Customer } from "@/types/entities/customer.type";
import { HttpStatusCode } from "axios";

export async function deleteCustomerService(id: string) {
  const res = await axiosInstance.delete<BackendResponseDto<Customer>>(
    `/customers/${id}`,
    {
      validateStatus: (status) => status === HttpStatusCode.Ok,
    },
  );

  return res.data.data;
}
