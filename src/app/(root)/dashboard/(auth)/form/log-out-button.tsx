import SumbitFormButton from "@/components/shared/sumbit-form-button";
import { LogOut } from "lucide-react";
import React from "react";
import { logOutUser } from "../lib/log-out-user";

const LogOutButton = () => {
  return (
    <>
      <form action={logOutUser}>
        <SumbitFormButton
          variant={"destructive"}
          className="justify-start gap-2"
        >
          <LogOut size={20} /> Log out
        </SumbitFormButton>
      </form>
    </>
  );
};

export default LogOutButton;
