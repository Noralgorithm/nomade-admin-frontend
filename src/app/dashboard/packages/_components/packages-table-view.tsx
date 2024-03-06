"use client";

import { deletePackage } from "@/actions/packages/delete-package.action";
import { ConfirmDeleteDialogWithButton } from "@/components/confirm-delete-dialog-with-button";
import { Table } from "@/components/table/table";
import { useEditFormModalContext } from "@/contexts/edit-form-modal.context";
import { EditPackageDto } from "@/types/dto/packages/edit-package.dto.type";
import { Package } from "@/types/entities/package.type";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

interface Props {
  packages: Package[];
  packagesCount: number;
}

const ACTIONS_ICONS_SIZE = 30;

export function PackagesTableView({ packages, packagesCount }: Props) {
  const router = useRouter();
  const { openModal } = useEditFormModalContext<EditPackageDto>();

  async function handleDeletePackage(id: string) {
    const res = await deletePackage(id);
    if (res?.message) {
      toast.error(res.message);
    } else {
      toast.success("Paquete eliminado con éxito.");
      router.refresh();
    }
  }

  async function handleEditPackage(id: string, values: EditPackageDto) {
    openModal(id, values);
  }

  const columns: GridColDef<Package>[] = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "name", headerName: "Nombre", width: 130 },
    { field: "description", headerName: "Descripción", width: 130 },
    { field: "price", headerName: "Precio", width: 130 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 130,
      renderCell: (params) => (
        <div className="flex items-center justify-center w-full">
          <Button onClick={() => handleEditPackage(params.row.id, params.row)}>
            <MdEdit size={ACTIONS_ICONS_SIZE} />
          </Button>
          <ConfirmDeleteDialogWithButton
            dialogProps={{
              title: "Eliminar paquete",
              content: "¿Estás seguro que deseas eliminar este paquete?",
              onConfirm: () => handleDeletePackage(params.row.id),
            }}
            iconSize={ACTIONS_ICONS_SIZE}
          />
        </div>
      ),
    },
  ];

  return (
    <Table columns={columns} items={packages} itemsCount={packagesCount} />
  );
}
