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

export async function getFlightById(id: string) {
  try {
    const flightById = await prisma.flight.findFirst({
      where: {
        id: id,
      },
    });

    return flightById;
  } catch (error) {
    console.log("Internal Server Error", error);
    return null;
  }
}
