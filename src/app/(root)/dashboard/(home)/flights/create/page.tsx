import FormFlights from "../components/form-flights";

const page = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="flex items-center justify-between">
          <h1 className="my-5 text-2xl font-bold">Tambahkan data flights</h1>
        </div>

        <FormFlights />
      </div>
    </>
  );
};

export default page;
