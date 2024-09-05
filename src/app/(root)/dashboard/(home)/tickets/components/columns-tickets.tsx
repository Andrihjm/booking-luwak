"use client";

import { Flight, FlightSeat, Ticket, User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import ColumnsRouteFlights from "../../flights/components/columns-route-flights";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type TicketType = Ticket & {
  flight: Flight;
  customer: User;
  flightSeat: FlightSeat;
};

export const columns: ColumnDef<TicketType>[] = [
  {
    accessorKey: "userId",
    header: "Nama penumpang",
    cell: ({ row }) => {
      const ticket = row.original;

      return ticket.customer.name;
    },
  },
  {
    accessorKey: "flightId",
    header: "Detail penerbangan",
    cell: ({ row }) => {
      const ticket = row.original;

      return <ColumnsRouteFlights flight={ticket.flight} />;
    },
  },
  {
    accessorKey: "flightSeatId",
    header: "Nomor kursi",
    cell: ({ row }) => {
      const ticket = row.original;

      return <Badge>{ticket.flightSeat.seat_number}</Badge>;
    },
  },
  {
    accessorKey: "status",
    header: "Status transaction",
    cell: ({ row }) => {
      const ticket = row.original;

      return (
        <div className="space-y-1">
          <Badge
            className={cn(
              ticket.status === "SECCESS"
                ? "bg-green-500"
                : ticket.status === "PENDING"
                ? "bg-yellow-500"
                : "bg-red-500"
            )}
          ></Badge>
        </div>
      );
    },
  },
];
