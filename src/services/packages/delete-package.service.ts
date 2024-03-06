import { axiosInstance } from "@/config/axios";
import { BackendResponseDto } from "@/types/dto/backend-response.dto.type";
import { Package } from "@/types/entities/package.type";
import { HttpStatusCode } from "axios";

export async function deletePackageService(id: string) {
  const res = await axiosInstance.delete<BackendResponseDto<Package>>(
    `/packages/${id}`,
    {
      validateStatus: (status) => status === HttpStatusCode.Ok,
    },
  );

  return res.data.data;
}
