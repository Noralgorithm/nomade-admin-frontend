"use client";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import { PackageFormView } from "./package-form-view";
import { useRouter } from "next/navigation";
import { useCreateFormModalContext } from "@/contexts/create-form-modal.context";
import { CreatePackageDto } from "@/types/dto/packages/create-package.dto.type";
import { createPackage } from "@/actions/packages/create-package.action";
import { createPackageDtoSchema } from "@/validations/packages/create-package-dto.validation";

export function CreatePackageForm() {
  const router = useRouter();
  const { isOpen, closeModal } = useCreateFormModalContext();

  const formik = useFormik<CreatePackageDto>({
    initialValues: {
      name: "",
      description: "",
      appliedDiscountPercentage: 0,
      containedServices: [],
      price: 0,
    },
    validationSchema: createPackageDtoSchema,
    onSubmit: async (values) => {
      const res = await createPackage(values);

      if (res?.message) {
        toast.error(res.message);
      } else {
        router.refresh();
        closeModal();
      }
    },
  });

  return (
    <PackageFormView
      formik={formik}
      isOpen={isOpen}
      closeModal={closeModal}
      isEdition={false}
    />
  );
}
