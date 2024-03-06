"use client";

import { createHotelPerNightDtoSchema } from "@/validations/hotels-per-night/create-hotel-per-night.validation";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { HotelFormView } from "./hotel-form-view";
import { useRouter } from "next/navigation";
import { useEditFormModalContext } from "@/contexts/edit-form-modal.context";
import { EditHotelPerNightDto } from "@/types/dto/hotels-per-night/edit-hotel.dto.type";
import { editHotelPerNight } from "@/actions/hotels-per-night/edit-hotel-per-night.action";

export function EditHotelForm() {
  const router = useRouter();
  const { isOpen, closeModal, initialValues, id } =
    useEditFormModalContext<EditHotelPerNightDto>();

  const formik = useFormik<EditHotelPerNightDto>({
    enableReinitialize: true,
    initialValues,
    validationSchema: createHotelPerNightDtoSchema,
    onSubmit: async (values) => {
      const res = await editHotelPerNight(id, values);

      if (res?.message) {
        toast.error(res.message);
      } else {
        router.refresh();
        closeModal();
      }
    },
  });

  return (
    <HotelFormView formik={formik} isOpen={isOpen} closeModal={closeModal} />
  );
}
