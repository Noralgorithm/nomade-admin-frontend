import { LoginPayloadSchema } from "@/lib/validations/login-payload.validation";
import { Button, TextInput } from "@tremor/react";
import { useFormik } from "formik";
import { login } from "@/lib/actions/login.action";
import { LoginPayload } from "@/types/payloads/login-payload.type";
import { toast } from "react-toastify";

export function LoginForm() {
  const formik = useFormik<LoginPayload>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginPayloadSchema,
    onSubmit: async (values) => {
      const res = await login(values);
      if (res.message) {
        toast.error(res.message);
      }
    },
  });

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={formik.handleSubmit}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    >
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
      <div>
        <label className="font-semibold text-sm">
          Contraseña
          <TextInput
            name="password"
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            defaultValue={formik.values.password}
            errorMessage={formik.errors.password}
            error={!!formik.errors.password && formik.touched.password}
            className="font-normal text-base"
          />
        </label>
      </div>
      <Button
        type="submit"
        variant="primary"
        loading={formik.isSubmitting}
        disabled={!formik.isValid || !formik.dirty}
      >
        Iniciar Sesión
      </Button>
    </form>
  );
}
