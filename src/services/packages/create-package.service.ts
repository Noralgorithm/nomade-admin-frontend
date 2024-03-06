import { axiosInstance } from "@/config/axios";
import { BackendResponseDto } from "@/types/dto/backend-response.dto.type";
import { CreatePackageDto } from "@/types/dto/packages/create-package.dto.type";
import { Package } from "@/types/entities/package.type";
import { HttpStatusCode } from "axios";

export async function createPackageService(
  createPackageDto: CreatePackageDto,
): Promise<Package> {
  const res = await axiosInstance.post<BackendResponseDto<Package>>(
    "/packages",
    createPackageDto,
    {
      validateStatus: (status) => status === HttpStatusCode.Created,
    },
  );

  return res.data.data;
}
