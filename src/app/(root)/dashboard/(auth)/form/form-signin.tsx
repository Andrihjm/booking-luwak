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

  return (
    <>
      <div className="w-full sm:w-full sm:max-w-sm sm:mx-auto">
        {state.errorTitle !== null && (
          <div className="w-full mx-auto my-7 p-4 rounded-lg text-white bg-red-500">
            <p className="mb-4 font-bold">{state.errorTitle}</p>

            <ul className="list-disc list-inside">
              {state.errorDesc?.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

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
