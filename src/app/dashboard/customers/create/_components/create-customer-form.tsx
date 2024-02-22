"use client";

import { createCustomer } from "@/lib/actions/create-customer.action";
import { CreateCustomerPayloadSchema } from "@/lib/validations/create-customer-payload.validation";
import { CreateCustomerPayload } from "@/types/payloads/create-customer-payload";
import { Card, DatePicker, TextInput } from "@tremor/react";
import { Button } from "@tremor/react";
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
    validationSchema: CreateCustomerPayloadSchema,
    onSubmit: async (values) => {
      const res = await createCustomer(values);
      if (res?.message) {
        toast.error(res.message);
      }
    },
  });

  return <CreateCustomerFormView formik={formik} />;
}
