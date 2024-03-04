import { date, number, object, string } from "yup";

export const createHotelPerNightDtoSchema = object({
  serviceName: string().required("El nombre del servicio es requerido."),
  serviceDescription: string().required(
    "La descripción del servicio es requerida.",
  ),
  serviceLocation: string().required("La ubicación del servicio es requerida."),
  servicePrice: number().required("El precio del servicio es requerido."),
  serviceTimestamp: date().required(
    "La fecha de inicio del servicio es requerida.",
  ),
  numberOfNights: number().required("El número de noches es requerido."),
  numberOfStars: number().required("El número de estrellas es requerido."),
  numberOfRooms: number().required("El número de habitaciones es requerido."),
  allowedNumberOfPeoplePerRoom: number().required(
    "El número de personas por habitación es requerido.",
  ),
  checkoutTimestamp: date().required(
    "La fecha de salida del servicio es requerida.",
  ),
});

export function validateCreateHotelPerNightDto(obj: object) {
  return createHotelPerNightDtoSchema.validateSync(obj);
}
