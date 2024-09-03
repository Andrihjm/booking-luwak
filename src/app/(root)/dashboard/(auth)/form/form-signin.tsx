"use client";

import { useFormState } from "react-dom";
import { ActionResult, handleSignInUser } from "../lib/action";
import { Input } from "@/components/ui/input";
import SumbitFormButton from "@/components/shared/sumbit-form-button";

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
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

          <SumbitFormButton>Submit</SumbitFormButton>
        </form>
      </div>
    </>
  );
};

export default FormSignIn;
