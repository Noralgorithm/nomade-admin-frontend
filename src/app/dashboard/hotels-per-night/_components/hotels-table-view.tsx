"use client";

import { deleteHotelPerNight } from "@/actions/hotels-per-night/delete-hotel-per-night.action";
import { ConfirmDeleteDialogWithButton } from "@/components/confirm-delete-dialog-with-button";
import { Table } from "@/components/table/table";
import { useEditFormModalContext } from "@/contexts/edit-form-modal.context";
import { EditHotelPerNightDto } from "@/types/dto/hotels-per-night/edit-hotel.dto.type";
import { HotelPerNight } from "@/types/entities/hotel-per-night.type";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

interface Props {
  hotelsPerNight: HotelPerNight[];
  hotelsPerNightCount: number;
}

const ACTIONS_ICONS_SIZE = 30;

export function HotelsTableView({
  hotelsPerNight,
  hotelsPerNightCount,
}: Props) {
  const router = useRouter();
  const { openModal } = useEditFormModalContext<EditHotelPerNightDto>();

  async function handleDeleteHotelPerNight(id: string) {
    const res = await deleteHotelPerNight(id);
    if (res?.message) {
      toast.error(res.message);
    } else {
      toast.success("Servicio de hotel eliminado con éxito.");
      router.refresh();
    }
  }

  const columns: GridColDef<HotelPerNight>[] = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "serviceName", headerName: "Nombre del hotel", width: 200 },
    { field: "serviceDescription", headerName: "Descripción", width: 200 },
    { field: "serviceLocation", headerName: "Ubicación", width: 200 },
    { field: "servicePrice", headerName: "Precio", width: 130 },
    { field: "serviceTimestamp", headerName: "Fecha de registro", width: 200 },
    { field: "numberOfNights", headerName: "Número de noches", width: 200 },
    { field: "numberOfStars", headerName: "Número de estrellas", width: 200 },
    {
      field: "numberOfRooms",
      headerName: "Número de habitaciones",
      width: 200,
    },
    {
      field: "allowedNumberOfPeoplePerRoom",
      headerName: "Número de personas por habitación",
      width: 200,
    },
    { field: "checkoutTimestamp", headerName: "Fecha de salida", width: 200 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 130,
      renderCell: (params) => (
        <div className="flex items-center justify-center w-full">
          <Button onClick={() => openModal(params.row.id, params.row)}>
            <MdEdit size={ACTIONS_ICONS_SIZE} />
          </Button>
          <ConfirmDeleteDialogWithButton
            dialogProps={{
              title: "Eliminar servicio de hotel",
              content:
                "¿Estás seguro que deseas eliminar este servicio de hotel?",
              onConfirm: () => handleDeleteHotelPerNight(params.row.id),
            }}
            iconSize={ACTIONS_ICONS_SIZE}
          />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      items={hotelsPerNight}
      itemsCount={hotelsPerNightCount}
    />
  );
}
