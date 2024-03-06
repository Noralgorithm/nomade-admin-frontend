import { Package } from "@/types/entities/package.type";

export interface EditPackageDto
  extends Omit<Package, "id" | "containedServices"> {}
