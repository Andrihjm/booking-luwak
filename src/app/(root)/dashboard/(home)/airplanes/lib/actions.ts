"use server";

import { redirect } from "next/navigation";
import { ActionResult } from "../../../(auth)/lib/action";
import { airplaneFormSchema } from "./validation";
import { revalidatePath } from "next/cache";
import { deleteFileImage, uploadFile } from "@/lib/supabase";
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

export async function updateDataAirplane(
  prevState: unknown,
  id: string,
  formData: FormData
): Promise<ActionResult> {
  let airplaneFormSchemaUpdate;

  const image = formData.get("image") as File;

  if (image.size > 0) {
    airplaneFormSchemaUpdate = airplaneFormSchema.omit({
      image: true,
    });
  } else {
    airplaneFormSchemaUpdate = airplaneFormSchema;
  }

  const updateAirplane = airplaneFormSchemaUpdate.safeParse({
    name: formData.get("name"),
    code: formData.get("code"),
    image: formData.get("image"),
  });

  if (!updateAirplane.success) {
    const errorDesc = updateAirplane.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error validation airplane.",
      errorDesc,
    };
  }

  let fileName;

  if (image.size > 0) {
    const uploadedFile = await uploadFile(image);

    if (uploadedFile instanceof Error) {
      return {
        errorTitle: "Failed to upload image",
        errorDesc: ["An error occurred while uploading the image."],
      };
    }

    fileName = uploadedFile;
  } else {
    const airplane = await prisma.ariplane.findFirst({
      where: {
        id: id,
      },
      select: {
        image: true,
      },
    });

    fileName = airplane?.image;
  }

  try {
    await prisma.ariplane.update({
      where: {
        id: id,
      },
      data: {
        name: updateAirplane.data.name,
        code: updateAirplane.data.code,
        image: fileName as string,
      },
    });
  } catch (error) {
    return {
      errorTitle: "Failed to update airplane",
      errorDesc: ["An error occurred while updating the airplane."],
    };
  }

  revalidatePath("/dashboard/airplanes");
  redirect("/dashboard/airplanes");
}

export async function deleteDataAirplane(
  id: string
): Promise<ActionResult | undefined> {
  const data = await prisma.ariplane.findFirst({
    where: {
      id: id,
    },
  });

  if (!data) {
    return {
      errorTitle: "Failed to delete airplane",
      errorDesc: [],
    };
  }

  const deletedFile = await deleteFileImage(data.image);

  if (deletedFile instanceof Error) {
    return {
      errorTitle: "Failed to delete file airplane",
      errorDesc: ["An error occurred while deleting the airplane."],
    };
  }

  try {
    await prisma.ariplane.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      errorTitle: "Failed to delete data airplane",
      errorDesc: ["An error occurred while deleting the airplane."],
    };
  }

  revalidatePath("/dashboard/airplanes");
}
