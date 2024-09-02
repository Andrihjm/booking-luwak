"use client";

import {
  ActionResult,
  handleSignInUser,
} from "@/app/(root)/dashboard/(auth)/lib/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useFormState } from "react-dom";

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: null,
};

const FormSignIn = () => {
  const [state, formAction] = useFormState(handleSignInUser, initialFormState);
  console.log(state);

  return (
    <>
      <div className="w-full sm:w-full sm:max-w-sm sm:mx-auto">
        <form action={formAction} className="w-full space-y-4">
          <Input name="email" type="email" placeholder="Email..." />
          <Input name="password" type="password" placeholder="Password..." />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
};

export default FormSignIn;
