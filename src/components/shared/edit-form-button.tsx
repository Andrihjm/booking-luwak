import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";

interface EditFormButtonProps {
  href: string;
}

const EditFormButton = ({ href }: EditFormButtonProps) => {
  return (
    <>
      <Link href={href} className="flex items-center">
        <Pencil size={18} className="mr-2" />
        Edit
      </Link>
    </>
  );
};

export default EditFormButton;
