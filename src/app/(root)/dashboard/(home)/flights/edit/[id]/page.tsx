import { getAirplanes } from "../../../airplanes/lib/data";
import FormFlights from "../../components/form-flights";
import { getFlightById } from "../../lib/data";

interface FlightsByIdProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: FlightsByIdProps) => {
  const airplane = await getAirplanes();
  const flight = await getFlightById(params.id);

  return (
    <>
      <div className="container-fluid">
        <div className="flex items-center justify-between">
          <h1 className="my-5 text-2xl font-bold">Tambahkan data flights</h1>
        </div>

        <FormFlights type="EDIT" airplanes={airplane} defaultValues={flight} />
      </div>
    </>
  );
};

export default page;
