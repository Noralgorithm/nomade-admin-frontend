"use client";

import { CreateFormModalProvider } from "@/contexts/create-form-modal.context";
import { ReactNode } from "react";
import { CreateHotelForm } from "./_components/create-hotel-form";
import { EditFormModalProvider } from "@/contexts/edit-form-modal.context";
import { EditHotelForm } from "./_components/edit-hotel-form";
import { EditHotelPerNightDto } from "@/types/dto/hotels-per-night/edit-hotel.dto.type";

interface Props {
  children: ReactNode;
}

export default function CustomersLayout({ children }: Props) {
  return (
    <CreateFormModalProvider>
      <EditFormModalProvider<EditHotelPerNightDto>>
        {children}
        <EditHotelForm />
      </EditFormModalProvider>
      <CreateHotelForm />
    </CreateFormModalProvider>
  );
}
