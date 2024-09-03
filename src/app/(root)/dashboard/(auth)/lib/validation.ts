import { z } from "zod";

export const formUserSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Invalid email." }),
  password: z.string({ required_error: "Password is required" }).min(3, {
    message: "The password you entered is incorrect",
  }),
});
