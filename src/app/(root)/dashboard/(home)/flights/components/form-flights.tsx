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

const FormFlights = () => {
  return (
    <>
      <form action="" className="space-y-8">
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="space-y-2">
            <label htmlFor="airplane_id">Select plane</label>
            <Select name="airplane_id">
              <SelectTrigger id="airplane_id">
                <SelectValue placeholder="Select plane" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Ticket price</Label>
            <Input
              type="number"
              name="price"
              id="price"
              required
              min={0}
              placeholder="Ticket price..."
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-10 space-y-4">
          {/* ---------- Destination ---------- */}
          <div className="space-y-2">
            <Label htmlFor="departure_city">Kota keberangkatan</Label>
            <Input
              id="departure_city"
              name="departure_date"
              required
              placeholder="Kota keberangkatan..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="departure_date">Departure_date</Label>
            <Input
              id="departure_date"
              type="datetime-local"
              required
              className="block"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="departure_city_code">Departure_city_code</Label>
            <Input
              id="departure_city_code"
              name="departure_city_code"
              required
              placeholder="Departure_city_code..."
            />
          </div>

          {/* ---------- DEparture ---------- */}
          <div className="space-y-2">
            <Label htmlFor="destination_city">Destination_city</Label>
            <Input
              id="destination_city"
              name="destination_city"
              required
              placeholder="Destination_city..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="arrival_date">Arrival_date</Label>
            <Input
              id="arrival_date"
              name="arrival_date"
              required
              type="datetime-local"
              className="block"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination_city_code">Destination_city_code</Label>
            <Input
              id="destination_city_code"
              name="destination_city_code"
              required
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
