"use server";

import { formUserSchema } from "./validation";
import { redirect } from "next/navigation";
import prisma from "../../../../../../lib/prisma";
import { verifyPassword } from "../../../../../../lib/hash-password";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";

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

  const existUser = await prisma.user.findFirst({
    where: {
      email: dataUser.data.email,
    },
  });

  if (!existUser) {
    return {
      errorTitle: "Error validation user.",
      errorDesc: ["User not found."],
    };
  }

  const comparePassword = await verifyPassword(
    dataUser.data.password,
    existUser.password
  );

  if (!comparePassword) {
    return {
      errorTitle: "Error when entering the password.",
      errorDesc: ["The password you entered is incorrect."],
    };
  }

  const session = await lucia.createSession(existUser.id, {});
  const sessionCookie = await lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/dashboard");
}
