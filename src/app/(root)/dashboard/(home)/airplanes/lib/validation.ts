import { z } from "zod";

const ACCEPETE_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const MAX_FILE_SIZE = 2000000; // 2MB

export const airplaneFormSchema = z.object({
  code: z
    .string({ required_error: "Code is required" })
    .min(3, "The code must be more than 3 letters"),
  name: z
    .string({ required_error: "Name is required" })
    .min(4, "The aircraft name must be more than 4 letters"),
  image: z
    .any()
    .refine(
      (file: File) => ACCEPETE_IMAGE_TYPES.includes(file.type),
      "Only jpg, jpeg and png files are allowed"
    )
    .refine(
      (file: File) => file.size <= MAX_FILE_SIZE,
      "Image size must be less than 2 MB"
    ),
});
