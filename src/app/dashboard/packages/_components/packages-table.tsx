import { PaginatedItemsDto } from "@/types/dto/pagination.dto.type";
import { PackagesTableView } from "./packages-table-view";
import { Package } from "@/types/entities/package.type";
import { fetchPackagesService } from "@/services/packages/fetch-packages.service";

interface Props {
  page: number;
}

export async function PackagesTable({ page }: Props) {
  let paginatedPackages: PaginatedItemsDto<Package>;

  try {
    paginatedPackages = await fetchPackagesService({
      page: page,
      perPage: 8,
    });
  } catch (e) {
    return <h3>Ha ocurrido un error inesperado.</h3>;
  }

  if (!paginatedPackages.items.length) {
    return <h3>No hay paquetes registrados.</h3>;
  }

  return (
    <PackagesTableView
      packages={paginatedPackages.items}
      packagesCount={paginatedPackages.itemCount}
    />
  );
}
