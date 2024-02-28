"use client";

import { createCustomer } from "@/lib/actions/create-customer.action";
import { CreateCustomerDtoSchema } from "@/lib/validations/create-customer-dto.validation";
import { CreateCustomerPayload } from "@/types/payloads/create-customer-dto.type";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { CreateCustomerFormView } from "../../_components/customer-form-view";

export function CreateCustomerForm() {
  const formik = useFormik<CreateCustomerPayload>({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      dni: "",
      birthdate: "",
      citizenship: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema: CreateCustomerDtoSchema,
    onSubmit: async (values) => {
      const res = await createCustomer(values);
      if (res?.message) {
        toast.error(res.message);
      }
    },
  });

  return <CreateCustomerFormView formik={formik} />;
}
