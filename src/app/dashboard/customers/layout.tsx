"use client";

import { CreateFormModalProvider } from "@/contexts/create-form-modal.context";
import { ReactNode } from "react";
import { CreateCustomerForm } from "./_components/create-customer-form";
import { EditFormModalProvider } from "@/contexts/edit-form-modal.context";
import { EditCustomerDto } from "@/types/dto/customers/edit-customer.dto.type";
import { EditCustomerForm } from "./_components/edit-customer-form";

interface Props {
  children: ReactNode;
}

export default function CustomersLayout({ children }: Props) {
  return (
    <CreateFormModalProvider>
      <EditFormModalProvider<EditCustomerDto>>
        {children}
        <CreateCustomerForm />
        <EditCustomerForm />
      </EditFormModalProvider>
    </CreateFormModalProvider>
  );
}
