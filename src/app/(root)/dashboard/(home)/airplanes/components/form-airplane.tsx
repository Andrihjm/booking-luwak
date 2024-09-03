"use client";

import SumbitFormButton from "@/components/shared/sumbit-form-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { createAirplane, updateDataAirplane } from "../lib/actions";
import { useFormState } from "react-dom";
import { ActionResult } from "../../../(auth)/lib/action";
import { Ariplane } from "@prisma/client";

interface FormAirplaneProps {
  type?: "CREATE" | "EDIT";
  defaultValues?: Ariplane | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const FormAirplane = ({ type, defaultValues }: FormAirplaneProps) => {
  const updateAirplaneWithId = (_state: ActionResult, formData: FormData) =>
    updateDataAirplane(null, defaultValues?.id || "", formData);

  const [state, formAction] = useFormState(
    type === "CREATE" ? createAirplane : updateAirplaneWithId,
    initialFormState
  );

  return (
    <>
      <form action={formAction} className="w-full max-w-md space-y-8">
        {state.errorTitle !== null && (
          <div className="w-full mx-auto my-7 p-4 rounded-lg text-white bg-red-500">
            <p className="mb-4 font-bold">{state.errorTitle}</p>

            <ul className="list-disc list-inside">
              {state.errorDesc?.map((error, index) => (
                <li key={index + error}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="code">Code</Label>
          <Input
            id="code"
            name="code"
            defaultValue={defaultValues?.code}
            placeholder="Aircraft code..."
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            defaultValue={defaultValues?.name}
            placeholder="Aircraft name..."
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="image">Image</Label>
          <Input id="image" name="image" type="file" />
        </div>

        <SumbitFormButton>Submit</SumbitFormButton>
      </form>
    </>
  );
};

export default FormAirplane;
