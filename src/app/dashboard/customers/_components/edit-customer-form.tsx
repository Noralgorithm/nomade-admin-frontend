"use client";

import { CreateCustomerDtoSchema } from "@/validations/customers/create-customer-dto.validation";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { CustomerFormView } from "./customer-form-view";
import { useRouter } from "next/navigation";
import { useEditFormModalContext } from "@/contexts/edit-form-modal.context";
import { EditCustomerDto } from "@/types/dto/customers/edit-customer.dto.type";
import { editCustomer } from "@/actions/customers/edit-customer.action";

export function EditCustomerForm() {
  const router = useRouter();
  const { isOpen, closeModal, initialValues, id } =
    useEditFormModalContext<EditCustomerDto>();

  const formik = useFormik<EditCustomerDto>({
    enableReinitialize: true,
    initialValues,
    validationSchema: CreateCustomerDtoSchema,
    onSubmit: async (values) => {
      const res = await editCustomer(id, values);

      if (res?.message) {
        toast.error(res.message);
      } else {
        router.refresh();
        closeModal();
      }
    },
  });

  console.log(formik.errors);
  return (
    <CustomerFormView formik={formik} isOpen={isOpen} closeModal={closeModal} />
  );
}
