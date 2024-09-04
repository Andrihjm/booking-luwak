"use server";

import { revalidatePath } from "next/cache";
import { ActionResult } from "../../../(auth)/lib/action";
import prisma from "../../../../../../../lib/prisma";
import { formFlightSchema } from "./validations";
import { redirect } from "next/navigation";
import { generateSeatPerClass } from "@/lib/utils";

export async function createDataFlights(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  const departure_date = new Date(formData.get("departure_date") as string);
  const arrival_date = new Date(formData.get("arrival_date") as string);

  const dataFlight = formFlightSchema.safeParse({
    airplane_id: formData.get("airplane_id"),
    departure_date,
    departure_city: formData.get("departure_city"),
    departure_city_code: formData.get("departure_city_code"),
    arrival_date,
    destination_city: formData.get("destination_city"),
    destination_city_code: formData.get("destination_city_code"),
    price: formData.get("price"),
  });

  if (!dataFlight.success) {
    const errorDesc = dataFlight.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error validation flight.",
      errorDesc,
    };
  }

  const data = await prisma.flight.create({
    data: {
      ...dataFlight.data,
      price: dataFlight.data.price.toString(),
    },
  });

  const seats = generateSeatPerClass(data.id);

  await prisma.flightSeat.createMany({
    data: seats,
  });

  revalidatePath("/dashboard/flights");
  redirect("/dashboard/flights");
}

export async function updateDataFlight(
  prevState: unknown,
  id: string,
  formData: FormData
): Promise<ActionResult> {
  const departure_date = new Date(formData.get("departure_date") as string);
  const arrival_date = new Date(formData.get("arrival_date") as string);

  const dataFlight = formFlightSchema.safeParse({
    airplane_id: formData.get("airplane_id"),
    departure_date,
    departure_city: formData.get("departure_city"),
    departure_city_code: formData.get("departure_city_code"),
    arrival_date,
    destination_city: formData.get("destination_city"),
    destination_city_code: formData.get("destination_city_code"),
    price: formData.get("price"),
  });

  if (!dataFlight.success) {
    const errorDesc = dataFlight.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error validation flight.",
      errorDesc,
    };
  }

  try {
    await prisma.flight.update({
      where: {
        id: id,
      },
      data: {
        ...dataFlight.data,
        price: dataFlight.data.price.toString(),
      },
    });
  } catch (error) {
    return {
      errorTitle: "Failed to update flight",
      errorDesc: ["An error occurred while updating the flight."],
    };
  }

  revalidatePath("/dashboard/flights");
  redirect("/dashboard/flights");
}
