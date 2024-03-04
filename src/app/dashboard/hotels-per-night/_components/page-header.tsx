"use client";

import { useCreateFormModalContext } from "@/contexts/create-form-modal.context";
import { Button, Typography } from "@mui/material";

export function HotelsPerNightPageHeader() {
  const { openModal } = useCreateFormModalContext();

  return (
    <div className="flex justify-between items-center w-full max-w-7xl">
      <Typography variant="h3" className="text-left font-semibold text-4xl">
        Hoteles por noche
      </Typography>
      <Button variant="contained" size="large" onClick={openModal}>
        Añadir
      </Button>
    </div>
  );
}
