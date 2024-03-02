import { Button, Dialog, DialogPanel } from "@tremor/react";
import { useState } from "react";

export interface ConfirmDeleteDialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  title: string;
  content: string;
  onConfirm: () => Promise<void> | void;
}

export function ConfirmDeleteDialog({
  isOpen,
  closeDialog,
  title,
  content,
  onConfirm,
}: ConfirmDeleteDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleConfirm() {
    setIsLoading(true);
    await onConfirm();
    setIsLoading(false);
    closeDialog();
  }

  return (
    <div className="flex justify-center">
      <Dialog
        open={isOpen}
        onClose={closeDialog}
        static={true}
        className="z-[100]"
      >
        <DialogPanel className="max-w-sm">
          <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {title}
          </h3>
          <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            {content}
          </p>
          <div className="flex justify-center items-start pt-5 gap-5">
            <Button
              variant="secondary"
              className="flex items-center w-[40%]"
              onClick={closeDialog}
            >
              Close
            </Button>
            <Button
              variant="primary"
              className="flex items-center w-[40%]"
              onClick={handleConfirm}
              loading={isLoading}
            >
              Eliminar
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
