"use client";

import SumbitFormButton from "@/components/shared/sumbit-form-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Ariplane, Flight } from "@prisma/client";
import { useFormState } from "react-dom";
import { createDataFlights, updateDataFlight } from "../lib/actions";
import { ActionResult } from "../../../(auth)/lib/action";
import { dateFormat } from "@/lib/utils";

interface FormFlightsProps {
  airplanes: Ariplane[];
  type?: "CREATE" | "EDIT";
  defaultValues?: Flight | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const FormFlights = ({ airplanes, type, defaultValues }: FormFlightsProps) => {
  const updateAirplaneWithId = (_state: ActionResult, formData: FormData) =>
    updateDataFlight(null, defaultValues?.id || "", formData);

  const [state, formAction] = useFormState(
    type === "CREATE" ? createDataFlights : updateAirplaneWithId,
    initialFormState
  );

  return (
    <>
      <form action={formAction} className="space-y-8">
        {state.errorTitle !== null && (
          <div className="w-full mx-auto my-7 p-4 rounded-lg text-white bg-red-500">
            <p className="mb-4 font-bold">{state.errorTitle}</p>

            <ul className="list-disc list-inside">
              {state.errorDesc?.map((error, index) => (
                <li key={index + error}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-2 items-center gap-4">
          <div className="space-y-2">
            <label htmlFor="airplane_id">Select plane</label>
            <Select
              name="airplane_id"
              defaultValue={defaultValues?.airplane_id}
            >
              <SelectTrigger id="airplane_id">
                <SelectValue placeholder="Select plane" />
              </SelectTrigger>
              <SelectContent>
                {airplanes.map((airplaneItems) => (
                  <SelectItem key={airplaneItems.id} value={airplaneItems.id}>
                    {airplaneItems.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Ticket price</Label>
            <Input
              type="number"
              name="price"
              defaultValue={defaultValues?.price}
              id="price"
              min={0}
              placeholder="Ticket price..."
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* ---------- Destination ---------- */}
          <div className="space-y-2">
            <Label htmlFor="departure_city">Departure city</Label>
            <Input
              id="departure_city"
              name="departure_city"
              defaultValue={defaultValues?.departure_city}
              placeholder="Kota keberangkatan..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="departure_date">Departure date</Label>
            <Input
              id="departure_date"
              name="departure_date"
              defaultValue={
                defaultValues?.departure_date
                  ? dateFormat(defaultValues.departure_date, "YYYY-MM-DDTHH:MM")
                  : ""
              }
              type="datetime-local"
              className="block"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="departure_city_code">Departure city code</Label>
            <Input
              id="departure_city_code"
              name="departure_city_code"
              defaultValue={defaultValues?.departure_city_code}
              placeholder="Departure_city_code..."
            />
          </div>

          {/* ---------- DEparture ---------- */}
          <div className="space-y-2">
            <Label htmlFor="destination_city">Destination city</Label>
            <Input
              id="destination_city"
              name="destination_city"
              defaultValue={defaultValues?.destination_city}
              placeholder="Destination_city..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="arrival_date">Arrival date</Label>
            <Input
              id="arrival_date"
              name="arrival_date"
              defaultValue={
                defaultValues?.arrival_date
                  ? dateFormat(defaultValues.arrival_date, "YYYY-MM-DDTHH:MM")
                  : ""
              }
              type="datetime-local"
              className="block"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination_city_code">Destination city code</Label>
            <Input
              id="destination_city_code"
              name="destination_city_code"
              defaultValue={defaultValues?.destination_city_code}
              placeholder="Destination_city_code..."
            />
          </div>
        </div>

        <SumbitFormButton>Submit</SumbitFormButton>
      </form>
    </>
  );
};

export default FormFlights;
