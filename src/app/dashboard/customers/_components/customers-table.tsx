import { PaginatedItemsDto } from "@/types/dto/pagination.dto.type";
import { CustomersTableView } from "./customers-table-view";
import { fetchCustomersService } from "@/services/customers/fetch-customers.service";
import { Customer } from "@/types/entities/customer.type";

interface Props {
  page: number;
}

export async function CustomersTable({ page }: Props) {
  let paginatedCustomers: PaginatedItemsDto<Customer>;

  try {
    paginatedCustomers = await fetchCustomersService({
      page: page,
      perPage: 8,
    });
  } catch (e) {
    return <h3>Ha ocurrido un error inesperado.</h3>;
  }

  if (!paginatedCustomers.items.length) {
    return <h3>No hay clientes registrados.</h3>;
  }

  return (
    <CustomersTableView
      customers={paginatedCustomers.items}
      customersCount={paginatedCustomers.itemCount}
    />
  );
}
