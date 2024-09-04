"use client";

import { Ariplane, Flight, FlightSeat } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import EditFormButton from "@/components/shared/edit-form-button";
import Image from "next/image";
import { getUrlFileImage } from "@/lib/supabase";
import ColumnsRouteFlights from "./columns-route-flights";
import ColumnSeatPrice from "./column-seat-price";
import DeleteButtonFormFlightProps from "./delete-button-form-flight";

export type FlightColumn = Flight & {
  airplane: Ariplane;
  flightSeat: Flight[];
  // flightSeat: FlightSeat[];
};

export const columns: ColumnDef<FlightColumn>[] = [
  {
    accessorKey: "airplane_id",
    header: "Pesawat",
    cell: ({ row }) => {
      const flight = row.original;
      const planeImageUrl = getUrlFileImage(flight.airplane.image);

      return (
        <div className="inline-flex items-center gap-5">
          <Image
            src={planeImageUrl}
            alt="Image plane"
            width={50}
            height={50}
            className="rounded-md"
          />
          <p className="font-semibold">{flight.airplane.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "departure_city",
    header: "Rute",
    cell: ({ row }) => {
      const flight = row.original;

      return (
        <>
          <ColumnsRouteFlights flight={flight} />
        </>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Harga / Kursi",
    cell: ({ row }) => {
      const flight = row.original;

      return <ColumnSeatPrice flight={flight} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const flight = row.original;

      return (
        <div className="inline-flex items-center gap-5">
          <EditFormButton href={`/dashboard/flights/edit/${flight.id}`} />

          <DeleteButtonFormFlightProps id={flight.id} />
        </div>
      );
    },
  },
];
