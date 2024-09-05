import { Metadata } from "next";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./components/columns-tickets";
import { getDataTicket } from "./lib/data";

export const metadata: Metadata = {
  title: "Dashboard | Ticket",
};

const page = async () => {
  const data = await getDataTicket();

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="my-5 text-2xl font-bold">Ticket</h1>
      </div>

      <DataTable columns={columns} data={data || []} />
    </>
  );
};

export default page;
