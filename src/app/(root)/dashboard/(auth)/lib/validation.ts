import { z } from "zod";

export const formUserSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Email tidak valid." }),
  password: z.string({ required_error: "Password is required" }).min(3, {
    message: "Password must be at least 3 characters",
  }),
});
