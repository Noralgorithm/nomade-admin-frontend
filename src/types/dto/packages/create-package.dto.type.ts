import { Package } from "@/types/entities/package.type";

export interface CreatePackageDto extends Omit<Package, "id"> {}
