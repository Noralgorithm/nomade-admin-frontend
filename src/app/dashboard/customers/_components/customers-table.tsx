import { CustomersTableView } from "./customers-table-view";
import { fetchCustomersService } from "@/services/customers/fetch-customers.service";

interface Props {
  page: number;
}

export async function CustomersTable({ page }: Props) {
  console.log("first");
  const customers = await fetchCustomersService({ page: page, perPage: 8 });

  return <CustomersTableView customers={customers} />;
}
