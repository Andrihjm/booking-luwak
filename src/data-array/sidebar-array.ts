import { BookOpenText, Plane, Ticket, User } from "lucide-react";

export const sidebarArray = [
  {
    id: 1,
    name: "Airplanes",
    path: "/dashboard/airplanes",
    icons: BookOpenText,
  },
  {
    id: 2,
    name: "Flights",
    path: "/dashboard/flights",
    icons: Plane,
  },
  {
    id: 3,
    name: "Tickets",
    path: "/dashboard/tickets",
    icons: Ticket,
  },
  {
    id: 4,
    name: "Users",
    path: "/dashboard/users",
    icons: User,
  },
];
