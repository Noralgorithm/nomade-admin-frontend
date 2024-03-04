"use client";

import { ReactNode, createContext, useContext, useState } from "react";

const EditFormModalContext = createContext<{
  isOpen: boolean;
  openModal: (id: string, initialValues: any) => void;
  closeModal: () => void;
  id: string;
  initialValues: unknown;
} | null>(null);

interface Props {
  children: ReactNode;
}

export function EditFormModalProvider<T>({ children }: Props) {
  const [id, setId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [initialValues, setInitialValues] = useState<T | {}>({});

  function openModal(id: string, initialValues: T) {
    setId(id);
    setInitialValues(initialValues);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <EditFormModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        id,
        initialValues,
      }}
    >
      {children}
    </EditFormModalContext.Provider>
  );
}

export function useEditFormModalContext<T>() {
  const context = useContext(EditFormModalContext);

  if (!context) {
    throw new Error(
      "useEditFormModal must be used within a EditFormModalProvider",
    );
  }

  let initialValues: T = context.initialValues as T;

  const ctx = { ...context, initialValues: initialValues as T };

  return ctx;
}
