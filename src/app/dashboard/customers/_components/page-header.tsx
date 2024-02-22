import { Button, Typography } from "@mui/material";
import Link from "next/link";

export function CustomersPageHeader() {
  return (
    <div className="flex justify-between items-center w-full max-w-7xl">
      <Typography variant="h3" className="text-left font-semibold text-4xl">
        Clientes
      </Typography>
      <Button
        variant="contained"
        size="large"
        LinkComponent={Link}
        href="/dashboard/customers/create"
      >
        Añadir
      </Button>
    </div>
  );
}
