"use client";

import { deleteCustomer } from "@/actions/customers/delete-customer.action";
import { ConfirmDeleteDialogWithButton } from "@/components/confirm-delete-dialog-with-button";
import { Table } from "@/components/table/table";
import { Customer } from "@/types/entities/customer.type";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

interface Props {
  customers: Customer[];
  customersCount: number;
}

const ACTIONS_ICONS_SIZE = 30;

export function CustomersTableView({ customers, customersCount }: Props) {
  const router = useRouter();

  async function handleDeleteCustomer(id: string) {
    const res = await deleteCustomer(id);
    if (res?.message) {
      toast.error(res.message);
    } else {
      toast.success("Cliente eliminado con éxito.");
      router.refresh();
    }
  }

  const columns: GridColDef<Customer>[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "Nombre", width: 130 },
    { field: "lastName", headerName: "Apellido", width: 130 },
    { field: "address", headerName: "Dirección", width: 130 },
    { field: "dni", headerName: "DNI", width: 130 },
    { field: "birthdate", headerName: "Fecha de nacimiento", width: 130 },
    { field: "citizenship", headerName: "Nacionalidad", width: 130 },
    { field: "phoneNumber", headerName: "Nro. Telefónico", width: 130 },
    { field: "email", headerName: "Correo", width: 130 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 130,
      renderCell: (params) => (
        <div className="flex items-center justify-center w-full">
          <Button>
            <MdEdit size={ACTIONS_ICONS_SIZE} />
          </Button>
          <ConfirmDeleteDialogWithButton
            dialogProps={{
              title: "Eliminar cliente",
              content: "¿Estás seguro que deseas eliminar este cliente?",
              onConfirm: () => handleDeleteCustomer(params.row.id),
            }}
            iconSize={ACTIONS_ICONS_SIZE}
          />
        </div>
      ),
    },
  ];

  return (
    <Table columns={columns} items={customers} itemsCount={customersCount} />
  );
}
