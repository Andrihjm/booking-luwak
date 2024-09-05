import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { columns } from "./components/columns-flights";
import { DataTable } from "@/components/shared/data-table";
import { getDataFlights } from "./lib/data";

export const metadata: Metadata = {
  title: "Dashboard | Flight",
};

const page = async () => {
  const data = await getDataFlights();

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="my-5 text-2xl font-bold">Flight</h1>

        <Link href={"/dashboard/flights/create"}>
          <Button>
            <Plus size={20} className="mr-2" />
            Create data
          </Button>
        </Link>
      </div>

      <DataTable columns={columns} data={data} />
    </>
  );
};

export default page;
