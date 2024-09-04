"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { mappingFlightSeat, rupiahFormat } from "@/lib/utils";
import { useMemo } from "react";
import { FlightColumn } from "./columns-flights";

interface ColumnSeatPriceProps {
  flight: FlightColumn;
}

const ColumnSeatPrice = ({ flight }: ColumnSeatPriceProps) => {
  const {
    totalSeatEconomy,
    totalSeatBusiness,
    totalSeatFirst,
    economy,
    business,
    first,
  } = useMemo(() => mappingFlightSeat(flight.flightSeat), [flight]);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>ECONOMY</AccordionTrigger>
        <AccordionContent>
          <div className="font-medium text-primary">
            <div>
              <span className="text-primary">Harga tiket: </span>
              {rupiahFormat(Number(flight.price))}
            </div>

            <div>
              <span className="text-primary">Sisa kursi: </span>
              {economy}/{totalSeatEconomy}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>BUSINESS</AccordionTrigger>
        <AccordionContent>
          <div className="font-medium text-primary">
            <div>
              <span className="text-primary">Harga tiket: </span>
              {rupiahFormat(Number(flight.price) + 50000)}
            </div>

            <div>
              <span className="text-primary">Sisa kursi: </span>
              {business} / {totalSeatBusiness}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>FIRST</AccordionTrigger>
        <AccordionContent>
          <div className="font-medium text-primary">
            <div>
              <span className="text-primary">Harga tiket: </span>
              {rupiahFormat(Number(flight.price) + 750000)}
            </div>

            <div>
              <span className="text-primary">Sisa kursi: </span>
              {first} / {totalSeatFirst}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ColumnSeatPrice;
