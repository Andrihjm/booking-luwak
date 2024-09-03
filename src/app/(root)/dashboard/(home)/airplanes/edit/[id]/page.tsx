import FormAirplane from "../../components/form-airplane";

const page = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="flex items-center justify-between">
          <h1 className="my-5 text-2xl font-bold">Edit airplane data</h1>
        </div>

        <FormAirplane />
      </div>
    </>
  );
};

export default page;
