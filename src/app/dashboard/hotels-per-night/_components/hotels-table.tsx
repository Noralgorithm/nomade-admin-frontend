import { PaginatedItemsDto } from "@/types/dto/pagination.dto.type";
import { HotelsTableView } from "./hotels-table-view";
import { fetchHotelPerNightService } from "@/services/hotels-per-night/fetch-hotel-per-night.service";
import { HotelPerNight } from "@/types/entities/hotel-per-night.type";

interface Props {
  page: number;
}

export async function HotelsTable({ page }: Props) {
  let paginatedHotelsPerNight: PaginatedItemsDto<HotelPerNight>;

  try {
    paginatedHotelsPerNight = await fetchHotelPerNightService({
      page: page,
      perPage: 8,
    });
  } catch (e) {
    return <h3>Ha ocurrido un error inesperado.</h3>;
  }

  if (!paginatedHotelsPerNight.items.length) {
    return <h3>No hay servicios de hotel registrados.</h3>;
  }

  return (
    <HotelsTableView
      hotelsPerNight={paginatedHotelsPerNight.items}
      hotelsPerNightCount={paginatedHotelsPerNight.itemCount}
    />
  );
}
