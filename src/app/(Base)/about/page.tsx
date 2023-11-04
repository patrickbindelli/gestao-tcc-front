"use client";

import Modal from "@/components/Modal";
import { useState } from "react";

export default function About() {
  const [open, setOpen] = useState(true);
  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <main className="flex flex-col gap-3 flex-1 w-full">
      <h1 className="text-2xl text-slate-12">Sobre o Sistema</h1>
      <button onClick={handleOpenModal}>open</button>
      <Modal open={open} setOpen={setOpen} title="Teste">
        <p className="text-sm text-slate-12">
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>
      </Modal>
    </main>
  );
}
