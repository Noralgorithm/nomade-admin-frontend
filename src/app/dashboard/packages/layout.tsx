"use client";

import { CreateFormModalProvider } from "@/contexts/create-form-modal.context";
import { ReactNode } from "react";
import { CreatePackageForm } from "./_components/create-package-form";
import { EditFormModalProvider } from "@/contexts/edit-form-modal.context";
import { EditCustomerForm } from "./_components/edit-package-form";
import { EditPackageDto } from "@/types/dto/packages/edit-package.dto.type";

interface Props {
  children: ReactNode;
}

export default function CustomersLayout({ children }: Props) {
  return (
    <CreateFormModalProvider>
      <EditFormModalProvider<EditPackageDto>>
        {children}
        <CreatePackageForm />
        <EditCustomerForm />
      </EditFormModalProvider>
    </CreateFormModalProvider>
  );
}
