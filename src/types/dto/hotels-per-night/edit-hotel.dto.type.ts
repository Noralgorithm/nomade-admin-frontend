import { HotelPerNight } from "../../entities/hotel-per-night.type";

export interface EditHotelPerNightDto extends Omit<HotelPerNight, "id"> {}
