"use client";

import { CreateFormModalProvider } from "@/contexts/create-form-modal.context";
import { ReactNode } from "react";
import { CreateHotelForm } from "./_components/create-hotel-form";

interface Props {
  children: ReactNode;
}

export default function CustomersLayout({ children }: Props) {
  return (
    <CreateFormModalProvider>
      {children}
      <CreateHotelForm />
    </CreateFormModalProvider>
  );
}
