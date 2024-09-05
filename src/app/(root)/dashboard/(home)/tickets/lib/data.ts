"use server";

import prisma from "../../../../../../../lib/prisma";

export const getDataTicket = async () => {
  try {
    const tickets = await prisma.ticket.findMany({
      include: {
        flight: true,
        flightSeat: true,
        user: true,
      },
    });

    return tickets;
  } catch (error) {
    console.log("Internal Server Error", error);
    return [];
  }
};
