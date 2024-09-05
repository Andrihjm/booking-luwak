"use server";

import prisma from "../../../../../../../lib/prisma";

export const getDataTicket = async () => {
  try {
    await prisma.ticket.findMany({
      include: {
        flight: true,
        flightSeat: true,
        user: true,
      },
    });
  } catch (error) {
    console.log("Internal Server Error", error);
    return [];
  }
};
