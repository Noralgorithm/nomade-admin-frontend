import { axiosInstance } from "@/config/axios";
import { BackendResponseDto } from "@/types/dto/backend-response.dto.type";
import { EditPackageDto } from "@/types/dto/packages/edit-package.dto.type";
import { Package } from "@/types/entities/package.type";
import { HttpStatusCode } from "axios";

export async function editPackageService(
  id: string,
  editPackageDto: EditPackageDto,
): Promise<Package> {
  const res = await axiosInstance.patch<BackendResponseDto<Package>>(
    `/packages/${id}`,
    editPackageDto,
    {
      validateStatus: (status) => status === HttpStatusCode.Ok,
    },
  );

  return res.data.data;
}
