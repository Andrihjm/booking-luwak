import FormAirplane from "../../components/form-airplane";
import { getAirplaneById } from "../../lib/actions";

interface AirplaneByIdProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: AirplaneByIdProps) => {
  const data = await getAirplaneById(params.id);

  return (
    <>
      <div className="container-fluid">
        <div className="flex items-center justify-between">
          <h1 className="my-5 text-2xl font-bold">Edit airplane data</h1>
        </div>

        <FormAirplane type="EDIT" defaultValues={data} />
      </div>
    </>
  );
};

export default page;
