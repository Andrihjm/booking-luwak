import { z } from "zod";

export const formUserSchema = z.object({
  name: z
    .string({ required_error: "Name is required." })
    .email({ message: "Email tidak valid." }),
  password: z.string({ required_error: "Password is required" }).min(6, {
    message: "Password must be at least 6 characters",
  }),
});
