import { object, string } from "yup";

export const LoginDtoSchema = object({
  email: string()
    .email("Correo electrónico inválido.")
    .required("El correo electrónico es requerido."),
  password: string().required("La contraseña es requerida."),
});

export function validateLoginDto(obj: object) {
  return LoginDtoSchema.validateSync(obj);
}
