import { object, string } from "yup";

export const createPackageDtoSchema = object({
  name: string().required("El nombre es requerido."),
  description: string().required("La descripción es requerida."),
  appliedDiscountPercentage: string().required(
    "El porcentaje de descuento es requerido.",
  ),
  price: string().required("El precio es requerido."),
});

export function validateCreatePackageDto(obj: object) {
  return createPackageDtoSchema.validateSync(obj);
}
