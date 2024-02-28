"use client";

import { CreateCustomerPayload } from "@/types/payloads/create-customer-dto.type";
import { Card, DatePicker, TextInput } from "@tremor/react";
import { Button } from "@tremor/react";
import { FormikProps } from "formik";

interface Props {
  formik: FormikProps<CreateCustomerPayload>;
}

export function CreateCustomerFormView({ formik }: Props) {
  return (
    <Card className="w-full max-w-3xl flex justify-center">
      <form
        onChange={formik.handleChange}
        onSubmit={formik.handleSubmit}
        onBlur={formik.handleBlur}
        className="flex flex-col py-5 gap-5 w-full max-w-xl mx-5"
      >
        <div>
          <label className="font-semibold text-sm">
            Nombre
            <TextInput
              name="firstName"
              placeholder="Pedro"
              defaultValue={formik.values.firstName}
              errorMessage={formik.errors.firstName}
              error={!!formik.errors.firstName && formik.touched.firstName}
              className="font-normal text-base"
            />
          </label>
        </div>
        <div>
          <label className="font-semibold text-sm">
            Apellido
            <TextInput
              name="lastName"
              placeholder="Pérez"
              defaultValue={formik.values.lastName}
              errorMessage={formik.errors.lastName}
              error={!!formik.errors.lastName && formik.touched.lastName}
              className="font-normal text-base"
            />
          </label>
        </div>
        <div>
          <label className="font-semibold text-sm">
            Dirección
            <TextInput
              name="address"
              placeholder="Calle 123"
              defaultValue={formik.values.address}
              errorMessage={formik.errors.address}
              error={!!formik.errors.address && formik.touched.address}
              className="font-normal text-base"
            />
          </label>
        </div>
        <div>
          <label className="font-semibold text-sm">
            DNI
            <TextInput
              name="dni"
              placeholder="30001193"
              defaultValue={formik.values.dni}
              errorMessage={formik.errors.dni}
              error={!!formik.errors.dni && formik.touched.dni}
              className="font-normal text-base"
            />
          </label>
        </div>
        <div>
          <label className="font-semibold text-sm">
            Fecha de nacimiento
            <DatePicker
              onValueChange={(v) => formik.setFieldValue("birthdate", v)}
              inputMode="text"
              enableYearNavigation
              placeholder="Selecciona una fecha"
              className="font-normal text-base"
            />
          </label>
        </div>
        <div>
          <label className="font-semibold text-sm">
            Nacionalidad
            <TextInput
              name="citizenship"
              placeholder="Argentina"
              defaultValue={formik.values.citizenship}
              errorMessage={formik.errors.citizenship}
              error={!!formik.errors.citizenship && formik.touched.citizenship}
              className="font-normal text-base"
            />
          </label>
        </div>
        <div>
          <label className="font-semibold text-sm">
            Número telefónico
            <TextInput
              name="phoneNumber"
              placeholder="+574147665236"
              defaultValue={formik.values.phoneNumber}
              errorMessage={formik.errors.phoneNumber}
              error={!!formik.errors.phoneNumber && formik.touched.phoneNumber}
              className="font-normal text-base"
            />
          </label>
        </div>
        <div>
          <label className="font-semibold text-sm">
            Correo Electrónico
            <TextInput
              name="email"
              placeholder="john.doe@gmail.com"
              defaultValue={formik.values.email}
              errorMessage={formik.errors.email}
              error={!!formik.errors.email && formik.touched.email}
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
    </Card>
  );
}
