"use server";

import { getUser, lucia } from "@/lib/auth";
import { ActionResult } from "./action";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logOutUser(): Promise<ActionResult> {
  const { session } = await getUser();

  if (!session) {
    return {
      errorTitle: "Error log out user.",
      errorDesc: ["Unauthorized user."],
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  redirect("/dashboard/sign-in");
}
