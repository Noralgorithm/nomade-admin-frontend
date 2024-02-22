import { object, string } from "yup";

export const LoginPayloadSchema = object({
  email: string()
    .email("Correo electrónico inválido.")
    .required("El correo electrónico es requerido."),
  password: string().required("La contraseña es requerida."),
});

export function validateLoginPayload(obj: object) {
  return LoginPayloadSchema.validateSync(obj);
}
