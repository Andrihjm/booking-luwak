"use server";

import { revalidatePath } from "next/cache";
import { formUserSchema } from "./validation";
import { redirect } from "next/navigation";

export interface ActionResult {
  errorTitle: string | null;
  errorDesc: string[] | null;
}

export async function handleSignInUser(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const dataUser = formUserSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!dataUser.success) {
    const errorDesc = dataUser.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error validation user.",
      errorDesc,
    };
  }

  revalidatePath("/dashboard/auth/sign-in");
  redirect("/dashboard/auth/sign-in");
}
