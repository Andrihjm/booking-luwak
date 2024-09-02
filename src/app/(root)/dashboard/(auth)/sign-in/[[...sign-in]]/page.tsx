import FormSignIn from "@/components/form/auth/form-sign-in";

const page = () => {
  return (
    <>
      <header className="sm:w-full sm:max-w-sm sm:mx-auto">
        <h2 className="mt-10 mb-4 text-center text-2xl font-bold leading-tight text-gray-900">
          Sign to your account
        </h2>
      </header>

      <FormSignIn />
    </>
  );
};

export default page;
