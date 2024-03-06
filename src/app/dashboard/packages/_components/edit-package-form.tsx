"use client";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import { PackageFormView } from "./package-form-view";
import { useRouter } from "next/navigation";
import { useEditFormModalContext } from "@/contexts/edit-form-modal.context";
import { createPackageDtoSchema } from "@/validations/packages/create-package-dto.validation";
import { EditPackageDto } from "@/types/dto/packages/edit-package.dto.type";
import { editPackage } from "@/actions/packages/edit-package.action";

export function EditCustomerForm() {
  const router = useRouter();
  const { isOpen, closeModal, initialValues, id } =
    useEditFormModalContext<EditPackageDto>();

  const formik = useFormik<EditPackageDto>({
    enableReinitialize: true,
    initialValues,
    //fix later
    validationSchema: createPackageDtoSchema,
    onSubmit: async (values) => {
      const res = await editPackage(id, values);

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
      isEdition
    />
  );
}
