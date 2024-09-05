import { DataTable } from "@/components/shared/data-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { columns } from "./components/column-airplane";
import { getAirplanes } from "./lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Airplanes",
};

const page = async () => {
  const airplane = await getAirplanes();

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="my-5 text-2xl font-bold">Airplanes</h1>

        <Link href={"/dashboard/airplanes/create"}>
          <Button>
            <Plus size={20} className="mr-2" />
            Create data
          </Button>
        </Link>
      </div>

      <DataTable columns={columns} data={airplane} />
    </>
  );
};

export default page;
