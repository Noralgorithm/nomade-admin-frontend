"use client";

import { createCustomer } from "@/actions/customers/create-customer.action";
import { createCustomerDtoSchema } from "@/validations/customers/create-customer-dto.validation";
import { CreateCustomerDto } from "@/types/dto/customers/create-customer.dto.type";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { CustomerFormView } from "./customer-form-view";
import { useRouter } from "next/navigation";
import { useCreateFormModalContext } from "@/contexts/create-form-modal.context";

export function CreateCustomerForm() {
  const router = useRouter();
  const { isOpen, closeModal } = useCreateFormModalContext();

  const formik = useFormik<CreateCustomerDto>({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      dni: "",
      birthdate: new Date(),
      citizenship: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema: createCustomerDtoSchema,
    onSubmit: async (values) => {
      const res = await createCustomer(values);

      if (res?.message) {
        toast.error(res.message);
      } else {
        router.refresh();
        closeModal();
      }
    },
  });

  return (
    <CustomerFormView formik={formik} isOpen={isOpen} closeModal={closeModal} />
  );
}
