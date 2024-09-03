"use server";

import { redirect } from "next/navigation";
import { ActionResult } from "../../../(auth)/lib/action";
import { airplaneFormSchema } from "./validation";
import { revalidatePath } from "next/cache";
import { uploadFile } from "@/lib/supabase";
import { error } from "console";
import prisma from "../../../../../../../lib/prisma";

export async function createAirplane(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const dataAirplane = airplaneFormSchema.safeParse({
    code: formData.get("code"),
    name: formData.get("name"),
    image: formData.get("image"),
  });

  if (!dataAirplane.success) {
    const errorDesc = dataAirplane.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error validation airplane.",
      errorDesc,
    };
  }

  const uploadFileImage = await uploadFile(dataAirplane.data.image);
  if (uploadFileImage instanceof error) {
    return {
      errorTitle: "Failed to upload image",
      errorDesc: ["An error occurred while uploading the image."],
    };
  }

  try {
    await prisma.ariplane.create({
      data: {
        name: dataAirplane.data.name,
        code: dataAirplane.data.code,
        image: uploadFileImage as string,
      },
    });
  } catch (error) {
    return {
      errorTitle: "Failed to create airplane",
      errorDesc: ["An error occurred while creating the airplane."],
    };
  }

  revalidatePath("/dashboard/airplanes");
  redirect("/dashboard/airplanes");
}

export async function getAirplaneById(id: string) {
  try {
    const airplaneById = await prisma.ariplane.findFirst({
      where: {
        id: id,
      },
    });

    return airplaneById;
  } catch (error) {
    console.log("Internal Server Error", error);
    return null;
  }
}
