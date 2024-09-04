import { getAirplanes } from "../../airplanes/lib/data";
import FormFlights from "../components/form-flights";

const page = async () => {
  const airplane = await getAirplanes();

  return (
    <>
      <div className="container-fluid">
        <div className="flex items-center justify-between">
          <h1 className="my-5 text-2xl font-bold">Tambahkan data flights</h1>
        </div>

        <FormFlights airplanes={airplane} />
      </div>
    </>
  );
};

export default page;
