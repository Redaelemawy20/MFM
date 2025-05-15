'use client';
import { Button } from '@nextui-org/react';
import { useFormContext } from '../context/FormContext';
interface FormButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export default function FormButton({
  children,
  disabled,
  className,
}: FormButtonProps) {
  const { isPending } = useFormContext();
  return (
    <Button
      type="submit"
      isLoading={isPending}
      className={`rounded !p-4 h-3 ${
        disabled || isPending
          ? 'bg-gray-200 cursor-not-allowed'
          : className || 'bg-blue-500'
      } mt-3`}
      disabled={disabled || isPending}
    >
      {children}
    </Button>
  );
}
