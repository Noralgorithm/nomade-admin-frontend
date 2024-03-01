import { axiosInstance } from "@/config/axios";
import { BackendResponseDto } from "@/types/dto/backend-response.dto.type";
import { CreateCustomerDto } from "@/types/dto/create-customer-dto.type";
import { Customer } from "@/types/entities/customer.type";
import { HttpStatusCode } from "axios";

export async function createCustomerService(
  createCustomerDto: CreateCustomerDto,
): Promise<Customer> {
  const res = await axiosInstance.post<BackendResponseDto<Customer>>(
    "/customers",
    createCustomerDto,
    {
      validateStatus: (status) => status === HttpStatusCode.Created,
    },
  );

  return res.data.data;
}
