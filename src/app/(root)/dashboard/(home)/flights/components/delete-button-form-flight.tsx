import SumbitFormButton from "@/components/shared/sumbit-form-button";
import { Trash } from "lucide-react";
import { deleteDataFlight } from "../lib/actions";

interface DeleteButtonFormFlightProps {
  id: string;
}

const DeleteButtonFormFlight = ({ id }: DeleteButtonFormFlightProps) => {
  const deletedDataFlight = deleteDataFlight.bind(null, id);

  return (
    <form action={deletedDataFlight}>
      <SumbitFormButton variant="destructive" size="sm">
        <Trash size={18} className="mr-2" />
        Deleted
      </SumbitFormButton>
    </form>
  );
};

export default DeleteButtonFormFlight;
