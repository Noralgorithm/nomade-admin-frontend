import { object, string } from "yup";

export const createCustomerDtoSchema = object({
  firstName: string().required("El nombre es requerido."),
  lastName: string().required("El apellido es requerido."),
  address: string().required("La dirección es requerida."),
  dni: string().required("El DNI es requerido."),
  birthdate: string().required("La fecha de nacimiento es requerida."),
  citizenship: string().required("La nacionalidad es requerida."),
  phoneNumber: string().required("El número telefónico es requerido."),
  email: string()
    .email("Correo electrónico inválido.")
    .required("El correo electrónico es requerido."),
});

export function validateCreateCustomerDto(obj: object) {
  return createCustomerDtoSchema.validateSync(obj);
}
