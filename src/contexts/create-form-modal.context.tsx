"use client";

import { ReactNode, createContext, useContext, useState } from "react";

const CreateFormModalContext = createContext<{
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
} | null>(null);

interface Props {
  children: ReactNode;
}

export function CreateFormModalProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <CreateFormModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </CreateFormModalContext.Provider>
  );
}

export function useCreateFormModalContext() {
  const context = useContext(CreateFormModalContext);
  if (!context) {
    throw new Error(
      "useCreateFormModalContext must be used within a CreateFormModalProvider",
    );
  }
  return context;
}
