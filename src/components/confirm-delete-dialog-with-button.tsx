import { Button } from "@mui/material";
import { MdDelete } from "react-icons/md";
import {
  ConfirmDeleteDialog,
  ConfirmDeleteDialogProps,
} from "./confirm-delete-dialog";
import { useState } from "react";

interface Props {
  iconSize: number;
  dialogProps: Omit<ConfirmDeleteDialogProps, "isOpen" | "closeDialog">;
}

export function ConfirmDeleteDialogWithButton({
  iconSize,
  dialogProps,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function openDialog() {
    setIsOpen(true);
  }

  function closeDialog() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={openDialog}>
        <MdDelete size={iconSize} />
      </Button>
      <ConfirmDeleteDialog
        isOpen={isOpen}
        closeDialog={closeDialog}
        {...dialogProps}
      />
    </>
  );
}
