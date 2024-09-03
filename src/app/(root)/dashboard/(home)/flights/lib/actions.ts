"use server";

import prisma from "../../../../../../../lib/prisma";

export async function getDataFlights() {
  try {
    const flight = await prisma.flight.findMany({
      include: {
        airplane: true,
        flightSeat: true,
      },
    });

    return flight;
  } catch (error) {
    console.log("Internal server error", error);
    return [];
  }
}
