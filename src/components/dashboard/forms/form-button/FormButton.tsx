"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface FormButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export default function FormButton({ children, disabled }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      isLoading={pending}
      className={`rounded !p-4 h-3 ${
        disabled ? "bg-gray-200 cursor-not-allowed" : "bg-blue-500"
      } mt-3`}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
