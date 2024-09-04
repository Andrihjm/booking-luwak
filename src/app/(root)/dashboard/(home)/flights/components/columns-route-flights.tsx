import { dateFormat } from "@/lib/utils";
import { Flight } from "@prisma/client";

interface ColumnsRouteFlightsProps {
  flight: Flight;
}

const ColumnsRouteFlights = ({ flight }: ColumnsRouteFlightsProps) => {
  return (
    <>
      <div className="flex items-center gap-5">
        {/* ---------- Departure ---------- */}
        <div className="text-center">
          <p className="font-medium">{flight.departure_city_code}</p>
          <p className="font-bold">{flight.departure_city}</p>
          <div className="text-xs text-gray-500">
            {dateFormat(flight.departure_date)}
          </div>
        </div>

        {/* ---------- Destination ---------- */}
        <div className="text-center">
          <p className="font-medium">{flight.destination_city_code}</p>
          <p className="font-bold">{flight.destination_city}</p>
          <div className="text-xs text-gray-500">
            {dateFormat(flight.arrival_date)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ColumnsRouteFlights;
