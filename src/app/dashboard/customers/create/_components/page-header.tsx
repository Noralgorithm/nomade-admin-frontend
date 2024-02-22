import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";

export function CustomerCreationPageHeader() {
  return (
    <Breadcrumbs className="w-full max-w-7xl">
      <Link href="/dashboard/customers" className="text-4xl">
        <Typography variant="h3" className="text-left font-semibold text-4xl">
          Clientes
        </Typography>
      </Link>
      <Typography variant="h4" color="black" className="font-semibold text-4xl">
        Añadir
      </Typography>
    </Breadcrumbs>
  );
}
