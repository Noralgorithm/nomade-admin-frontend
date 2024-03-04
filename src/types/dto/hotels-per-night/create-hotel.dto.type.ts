import { HotelPerNight } from "../../entities/hotel-per-night.type";

export interface CreateHotelPerNightDto extends Omit<HotelPerNight, "id"> {}
