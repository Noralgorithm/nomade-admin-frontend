"use client";

import { CreateHotelPerNightDto } from "@/types/dto/hotels-per-night/create-hotel.dto.type";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { CreateHotelFormView } from "./hotel-form-view";
import { useRouter } from "next/navigation";
import { createHotelPerNight } from "@/actions/hotels-per-night/create-hotel-per-night.action";
import { createHotelPerNightDtoSchema } from "@/validations/hotels-per-night/create-hotel-per-night.validation";

export function CreateHotelForm() {
  const router = useRouter();

  const formik = useFormik<CreateHotelPerNightDto>({
    initialValues: {
      serviceName: "",
      serviceDescription: "",
      serviceLocation: "",
      servicePrice: 0,
      serviceTimestamp: new Date(),
      numberOfNights: 0,
      numberOfStars: 0,
      numberOfRooms: 0,
      allowedNumberOfPeoplePerRoom: 0,
      checkoutTimestamp: new Date(),
    },
    validationSchema: createHotelPerNightDtoSchema,
    onSubmit: async (values) => {
      const res = await createHotelPerNight(values);

      if (res?.message) {
        toast.error(res.message);
      } else {
        router.refresh();
      }
    },
  });

  console.log(formik.errors)

  return <CreateHotelFormView formik={formik} />;
}
