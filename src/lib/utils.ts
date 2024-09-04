import { FlightSeat, TypeFlightSeat } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSeatPerClass = (flightId: string) => {
  const SEAT_CLASS: TypeFlightSeat[] = ["ECONOMY", "BUSINESS", "FIRST"];
  const SEAT_CODE = ["A", "B", "C", "D"];

  const seats: {
    seat_number: string;
    type: TypeFlightSeat;
    flightId: string;
  }[] = [];

  for (const className of SEAT_CLASS) {
    for (const seat of SEAT_CODE) {
      for (let i = 1; i <= 5; i++) {
        seats.push({
          seat_number: seat + i,
          type: className as TypeFlightSeat,
          flightId,
        });
      }
    }
  }

  return seats;
};

export const dateFormat = (
  date: Date | string,
  format = "DD MMM YYYY HH:mm"
) => {
  if (!date) {
    return "";
  }

  const dateFormatter = dayjs(date).format(format);
  return dateFormatter;
};

export const rupiahFormat = (value: number) => {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

export const mappingFlightSeat = (flightSeats: FlightSeat[]) => {
  const totalSeatEconomy = flightSeats.filter(
    (seats) => seats.type === "ECONOMY"
  ).length;
  const totalSeatBusiness = flightSeats.filter(
    (seats) => seats.type === "BUSINESS"
  ).length;
  const totalSeatFirst = flightSeats.filter(
    (seats) => seats.type === "FIRST"
  ).length;

  const economy = flightSeats.filter(
    (seats) => seats.type === "ECONOMY" && seats.is_booked
  ).length;
  const business = flightSeats.filter(
    (seats) => seats.type === "BUSINESS" && seats.is_booked
  ).length;
  const first = flightSeats.filter(
    (seats) => seats.type === "FIRST" && seats.is_booked
  ).length;

  return {
    totalSeatEconomy,
    totalSeatBusiness,
    totalSeatFirst,
    economy,
    business,
    first,
  };
};
