"use client";

import { Customer } from "@/types/entities/customer.type";
import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface Props {
  customers: Customer[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Nombre", width: 130 },
  { field: "lastName", headerName: "Apellido", width: 130 },
  { field: "address", headerName: "Dirección", width: 130 },
  { field: "dni", headerName: "DNI", width: 130 },
  { field: "birthdate", headerName: "Fecha de nacimiento", width: 130 },
  { field: "citizenship", headerName: "Nacionalidad", width: 130 },
  { field: "phoneNumber", headerName: "Nro. Telefónico", width: 130 },
  { field: "email", headerName: "Correo", width: 130 },
];

export function CustomersTableView({ customers }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function updateSearchParamsInURL(page: number) {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set("page", String(page));

    replace(`${pathname}?${newSearchParams}`);
  }

  return (
    <Paper className="w-full max-w-7xl">
      <DataGrid
        columns={columns}
        rows={customers}
        rowCount={15}
        pagination
        onRowClick={(obj: { row: Customer }) => {
          console.log(obj.row);
        }}
        pageSizeOptions={[8]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        paginationMode="server"
        onPaginationModelChange={(paginationModel) => {
          updateSearchParamsInURL(paginationModel.page + 1);
        }}
      />
    </Paper>
  );
}
