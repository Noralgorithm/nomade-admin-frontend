"use server";

import { LoginPayload } from "@/types/login-payload.type";
import { validateLoginPayload } from "../validations/login-payload";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const users = [
  {
    email: "prueba1@gmail.com",
    password: "123456",
  },
];

export async function login(payload: LoginPayload) {
  if (!validateLoginPayload(payload)) {
    throw new Error("Invalid Login Payload.");
  }

  const user = users.find((user) => user.email === payload.email);

  if (!user) {
    return { message: "Usuario no encontrado." };
  }

  if (user.password !== payload.password) {
    return { message: "Contraseña incorrecta." };
  }

  cookies().set("token", "123");

  return redirect("/dashboard");
}
