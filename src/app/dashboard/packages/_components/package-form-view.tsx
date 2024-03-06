"use client";

import { CreatePackageDto } from "@/types/dto/packages/create-package.dto.type";
import { EditPackageDto } from "@/types/dto/packages/edit-package.dto.type";
import {
  Button,
  Dialog,
  DialogPanel,
  MultiSelect,
  MultiSelectItem,
  NumberInput,
  TextInput,
} from "@tremor/react";
import { FormikProps } from "formik";

type Props =
  | {
      formik: FormikProps<CreatePackageDto>;
      isEdition: false;
      isOpen: boolean;
      closeModal: () => void;
    }
  | {
      formik: FormikProps<EditPackageDto>;
      isEdition: true;
      isOpen: boolean;
      closeModal: () => void;
    };

export function PackageFormView({
  formik,
  isOpen,
  closeModal,
  isEdition,
}: Props) {
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
                  name="name"
                  placeholder="Nombre"
                  defaultValue={formik.values.name}
                  errorMessage={formik.errors.name}
                  error={!!formik.errors.name && formik.touched.name}
                  className="font-normal text-base"
                />
              </label>
            </div>
            <div>
              <label className="font-semibold text-sm">
                Descripción
                <TextInput
                  name="description"
                  placeholder="Descripción"
                  defaultValue={formik.values.description}
                  errorMessage={formik.errors.description}
                  error={
                    !!formik.errors.description && formik.touched.description
                  }
                  className="font-normal text-base"
                />
              </label>
            </div>
            <div>
              <label className="font-semibold text-sm">
                Descuento
                <NumberInput
                  name="appliedDiscountPercentage"
                  placeholder="Descuento"
                  defaultValue={formik.values.appliedDiscountPercentage}
                  errorMessage={formik.errors.appliedDiscountPercentage}
                  error={
                    !!formik.errors.appliedDiscountPercentage &&
                    formik.touched.appliedDiscountPercentage
                  }
                  className="font-normal text-base"
                />
              </label>
            </div>
            {/* <div>
              <label className="font-semibold text-sm">
                Servicios
                <TextInput
                  name="containedServices"
                  placeholder="Servicios"
                  defaultValue={formik.values.containedServices}
                  errorMessage={formik.errors.containedServices}
                  error={
                    !!formik.errors.containedServices &&
                    formik.touched.containedServices
                  }
                  className="font-normal text-base"
                />
              </label>
            </div> */}
            {!isEdition && (
              <div>
                <label className="font-semibold text-sm">
                  Servicios
                  <MultiSelect
                    name="containedServices"
                    placeholder="Servicios"
                    defaultValue={formik.values.containedServices}
                    /* errorMessage={formik.errors.containedServices}
                  error={
                    !!formik.errors.containedServices &&
                    formik.touched.containedServices
                  } */
                    className="font-normal text-base"
                  >
                    <MultiSelectItem value="1">Test</MultiSelectItem>
                  </MultiSelect>
                </label>
              </div>
            )}

            <div>
              <label className="font-semibold text-sm">
                Precio
                <NumberInput
                  name="price"
                  placeholder="Precio"
                  defaultValue={formik.values.price}
                  errorMessage={formik.errors.price}
                  error={!!formik.errors.price && formik.touched.price}
                  className="font-normal text-base"
                />
              </label>
            </div>
            <div className="flex justify-center gap-4 w-full">
              <Button
                color="neutral"
                disabled={formik.isSubmitting}
                onClick={closeModal}
                className="mt-5 w-[40%]"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={!formik.isValid || !formik.dirty}
                loading={formik.isSubmitting}
                className="mt-5 w-[40%]"
              >
                Continuar
              </Button>
            </div>
          </form>
        </DialogPanel>
      </Dialog>
    </>
  );
}
