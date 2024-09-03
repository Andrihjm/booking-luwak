"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface SumbitFormButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "destructive" | "secondary" | "ghost";
  onClick?: () => void;
}

const SumbitFormButton = ({
  children,
  className,
  variant,
  onClick,
}: SumbitFormButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={variant}
      className={`w-full ${className}`}
      onClick={onClick}
      disabled={pending}
      type="submit"
    >
      {pending ? "Loading..." : children}
    </Button>
  );
};

export default SumbitFormButton;
