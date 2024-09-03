import { getUser } from "@/lib/auth";
import FormSignIn from "../../form/form-signin";
import { redirect } from "next/navigation";

const page = async () => {
  const { user, session } = await getUser();

  if (session && user.role === "ADMIN") {
    redirect("/dashboard");
  }

  return (
    <>
      <header className="sm:w-full sm:max-w-sm sm:mx-auto">
        <h2 className="mt-10 mb-2 text-center text-2xl font-bold leading-tight text-gray-900">
          Sign to your account
        </h2>
      </header>

      <FormSignIn />
    </>
  );
};

export default page;
