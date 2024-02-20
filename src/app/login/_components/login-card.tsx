"use client";

import { Card } from "@tremor/react";
import { LoginForm } from "./login-form";

export function LoginCard() {
  return (
    <Card className="flex flex-col max-w-lg gap-8">
      <h1 className="text-center text-2xl font-bold">¡Bienvenido!</h1>
      <LoginForm />
    </Card>
  );
}
