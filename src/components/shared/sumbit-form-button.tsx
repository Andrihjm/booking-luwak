"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface SumbitFormButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "destructive" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
}

const SumbitFormButton = ({
  children,
  className,
  variant,
  size,
  onClick,
}: SumbitFormButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={variant}
      className={`w-full ${className}`}
      onClick={onClick}
      disabled={pending}
      size={size}
      type="submit"
    >
      {pending ? "Loading..." : children}
    </Button>
  );
};

export default SumbitFormButton;
