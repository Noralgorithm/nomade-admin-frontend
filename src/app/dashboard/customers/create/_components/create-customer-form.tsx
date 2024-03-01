"use client";

import { createCustomer } from "@/actions/create-customer.action";
import { CreateCustomerDtoSchema } from "@/validations/create-customer-dto.validation";
import { CreateCustomerDto } from "@/types/dto/create-customer-dto.type";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { CreateCustomerFormView } from "../../_components/customer-form-view";

export function CreateCustomerForm() {
  const formik = useFormik<CreateCustomerDto>({
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
