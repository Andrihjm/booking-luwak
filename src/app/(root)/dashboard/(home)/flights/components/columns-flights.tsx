"use client";

import { Ariplane, Flight } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import DeletedAirplane from "../../airplanes/components/deleted-airplane";
import EditFormButton from "@/components/shared/edit-form-button";

export type FlightColumn = Flight & {
  airplane: Ariplane;
  flightSeat: Flight[];
};

export const columns: ColumnDef<FlightColumn>[] = [
  {
    accessorKey: "airplane_id",
    header: "Pesawat",
    cell: ({ row }) => {
      const flight = row.original;

      return "Pesawat";
    },
  },
  {
    accessorKey: "departure_city",
    header: "Rute",
    cell: ({ row }) => {
      const flight = row.original;

      return "Pesawat";
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const flight = row.original;

      return "Pesawat";
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const flight = row.original;

      return (
        <div className="inline-flex items-center gap-5">
          <EditFormButton href={`/dashboard/flights/edit/${flight.id}`} />

          <DeletedAirplane id={flight.id} />
        </div>
      );
    },
  },
];
