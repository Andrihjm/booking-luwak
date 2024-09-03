"use server";

import prisma from "../../../../../../../lib/prisma";

export async function getAirplanes() {
  try {
    const airplanes = await prisma.ariplane.findMany({});

    return airplanes;
  } catch (error) {
    console.log("Internal Server Error", error);
    return [];
  }
}
