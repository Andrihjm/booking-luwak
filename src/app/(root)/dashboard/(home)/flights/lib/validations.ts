import { z } from "zod";

export const formFlightSchema = z.object({
  airplane_id: z.string({ required_error: "Airplane is required" }),
  price: z.string({ required_error: "Price is required" }),
  departure_date: z.date(),
  departure_city: z.string({ required_error: "Departure city is required" }),
  departure_city_code: z
    .string({
      required_error: "Departure city code is required",
    })
    .min(3, "The code must be more than 3 letters")
    .max(3, "The code must be less than 3 letters"),

  arrival_date: z.date(),
  destination_city: z.string({
    required_error: "Destination city is required",
  }),
  destination_city_code: z
    .string({
      required_error: "Destination city code is required",
    })
    .min(3, "The code must be more than 3 letters")
    .max(3, "The code must be less than 3 letters"),
});
