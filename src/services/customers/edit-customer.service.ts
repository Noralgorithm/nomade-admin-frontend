import { axiosInstance } from "@/config/axios";
import { BackendResponseDto } from "@/types/dto/backend-response.dto.type";
import { EditCustomerDto } from "@/types/dto/customers/edit-customer.dto.type";
import { Customer } from "@/types/entities/customer.type";
import { HttpStatusCode } from "axios";

export async function editCustomerService(
  id: string,
  editCustomerDto: EditCustomerDto,
): Promise<Customer> {
  const res = await axiosInstance.patch<BackendResponseDto<Customer>>(
    `/customers/${id}`,
    editCustomerDto,
    {
      validateStatus: (status) => status === HttpStatusCode.Ok,
    },
  );

  return res.data.data;
}
