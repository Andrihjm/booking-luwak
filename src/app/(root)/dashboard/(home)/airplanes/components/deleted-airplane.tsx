import SumbitFormButton from "@/components/shared/sumbit-form-button";
import { Trash } from "lucide-react";
import { deleteDataAirplane } from "../lib/actions";

interface DeletedAirplaneProps {
  id: string;
}

const DeletedAirplane = ({ id }: DeletedAirplaneProps) => {
  const deletedDataAirplane = deleteDataAirplane.bind(null, id);

  return (
    <form action={deletedDataAirplane}>
      <SumbitFormButton variant="destructive" size="sm">
        <Trash size={18} className="mr-2" />
        Deleted
      </SumbitFormButton>
    </form>
  );
};

export default DeletedAirplane;
