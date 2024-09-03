"use client";

import { Ariplane } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Ariplane>[] = [
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const airplane = row.original;

      return (
        <div className="inline-flex items-center gap-5">
          <Link
            href={`/dashboard/airplanes/edit/${airplane.id}`}
            className="flex items-center"
          >
            <Pencil size={20} className="mr-2" />
            Edit
          </Link>
        </div>
      );
    },
  },
];
