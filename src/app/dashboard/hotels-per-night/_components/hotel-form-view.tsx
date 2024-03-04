"use client";

import { useCreateFormModalContext } from "@/contexts/create-form-modal.context";
import { CreateHotelPerNightDto } from "@/types/dto/hotels-per-night/create-hotel.dto.type";
import {
  Button,
  DatePicker,
  Dialog,
  DialogPanel,
  NumberInput,
  TextInput,
} from "@tremor/react";
import { FormikProps } from "formik";

interface Props {
  formik: FormikProps<CreateHotelPerNightDto>;
}

export function CreateHotelFormView({ formik }: Props) {
  const { isOpen, closeModal } = useCreateFormModalContext();

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="w-full flex justify-center"
      >
        <DialogPanel className="w-full max-w-4xl">
          <form
            onChange={formik.handleChange}
            onSubmit={formik.handleSubmit}
            onBlur={formik.handleBlur}
            className="flex flex-col py-5 gap-5 w-full px-5"
          >
            <div>
              <label className="font-semibold text-sm">
                Nombre
                <TextInput
                  name="serviceName"
                  placeholder="Hotel"
                  defaultValue={formik.values.serviceName}
                  errorMessage={formik.errors.serviceName}
                  error={
                    !!formik.errors.serviceName && formik.touched.serviceName
                  }
                  className="font-normal text-base"
                />
              </label>
            </div>
            <div>
              <label className="font-semibold text-sm">
                Descripción
                <TextInput
                  name="serviceDescription"
                  placeholder="Descripción"
                  defaultValue={formik.values.serviceDescription}
                  errorMessage={formik.errors.serviceDescription}
                  error={
                    !!formik.errors.serviceDescription &&
                    formik.touched.serviceDescription
                  }
                  className="font-normal text-base"
                />
              </label>
            </div>
            <div>
              <label className="font-semibold text-sm">
                Ubicación
                <TextInput
                  name="serviceLocation"
                  placeholder="Ubicación"
                  defaultValue={formik.values.serviceLocation}
                  errorMessage={formik.errors.serviceLocation}
                  error={
                    !!formik.errors.serviceLocation &&
                    formik.touched.serviceLocation
                  }
                  className="font-normal text-base"
                />
              </label>
            </div>
            <div>
              <label className="font-semibold text-sm">
                Precio
                <NumberInput
                  name="servicePrice"
                  placeholder="Precio"
                  defaultValue={formik.values.servicePrice}
                  errorMessage={formik.errors.servicePrice}
                  error={
                    !!formik.errors.servicePrice && formik.touched.servicePrice
                  }
                  className="font-normal text-base"
                />
              </label>
            </div>
            <div>
              <label className="font-semibold text-sm">
                Fecha de inicio
                <DatePicker
                  onValueChange={(v) =>
                    formik.setFieldValue("serviceTimestamp", v)
                  }
                  inputMode="text"
                  defaultValue={formik.values.serviceTimestamp}
                  enableYearNavigation
                  placeholder="Selecciona una fecha"
                  className="font-normal text-base"
                />
              </label>
            </div>
            <div>
              <label className="font-semibold text-sm">
                Fecha de checkout
                <DatePicker
                  onValueChange={(v) =>
                    formik.setFieldValue("checkoutTimestamp", v)
                  }
                  defaultValue={formik.values.checkoutTimestamp}
                  className="font-normal text-base"
                />
              </label>
            </div>
            <div>
              <label className="font-semibold text-sm">
                Número de noches
                <NumberInput
                  name="numberOfNights"
                  placeholder="Noches"
                  defaultValue={formik.values.numberOfNights}
                  errorMessage={formik.errors.numberOfNights}
                  error={
                    !!formik.errors.numberOfNights &&
                    formik.touched.numberOfNights
                  }
                  className="font-normal text-base"
                />
              </label>
            </div>
            <div>
              <label className="font-semibold text-sm">
                Número de estrellas
                <NumberInput
                  name="numberOfStars"
                  min={1}
                  max={5}
                  placeholder="Estrellas"
                  defaultValue={formik.values.numberOfStars}
                  errorMessage={formik.errors.numberOfStars}
                  error={
                    !!formik.errors.numberOfStars &&
                    formik.touched.numberOfStars
                  }
                  className="font-normal text-base"
                />
              </label>
            </div>
            <div>
              <label className="font-semibold text-sm">
                Número de habitaciones
                <NumberInput
                  name="numberOfRooms"
                  placeholder="Habitaciones"
                  defaultValue={formik.values.numberOfRooms}
                  errorMessage={formik.errors.numberOfRooms}
                  error={
                    !!formik.errors.numberOfRooms &&
                    formik.touched.numberOfRooms
                  }
                  className="font-normal text-base"
                />
              </label>
            </div>
            <div>
              <label className="font-semibold text-sm">
                Número de personas por habitación
                <NumberInput
                  name="allowedNumberOfPeoplePerRoom"
                  placeholder="Personas"
                  defaultValue={formik.values.allowedNumberOfPeoplePerRoom}
                  errorMessage={formik.errors.allowedNumberOfPeoplePerRoom}
                  error={
                    !!formik.errors.allowedNumberOfPeoplePerRoom &&
                    formik.touched.allowedNumberOfPeoplePerRoom
                  }
                  className="font-normal text-base"
                />
              </label>
            </div>
            <Button
              type="submit"
              disabled={!formik.isValid || !formik.dirty}
              loading={formik.isSubmitting}
              className="mt-5"
            >
              Añadir
            </Button>
          </form>
        </DialogPanel>
      </Dialog>
    </>
  );
}
