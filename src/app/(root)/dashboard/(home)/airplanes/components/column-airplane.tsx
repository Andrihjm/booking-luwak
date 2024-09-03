"use client";

import { getUrlFileImage } from "@/lib/supabase";
import { Ariplane } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const columns: ColumnDef<Ariplane>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const airplane = row.original;

      return (
        <Image
          src={getUrlFileImage(airplane.image)}
          alt="airplane image"
          width={50}
          height={50}
        />
      );
    },
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
