import SumbitFormButton from "@/components/shared/sumbit-form-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const FormAirplane = () => {
  return (
    <>
      <form action="" className="w-full max-w-md space-y-8">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="code">Code</Label>
          <Input id="code" name="code" placeholder="Aircraft code..." />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Aircraft name..." />
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
