import { DataTable } from "@/components/shared/data-table";
import { Metadata } from "next";
import { columns } from "./components/columns-users";
import { getDataUsers } from "./lib/data";

export const metadata: Metadata = {
  title: "Dashboard | User",
};

const page = async () => {
  const data = await getDataUsers();

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="my-5 text-2xl font-bold">User</h1>
      </div>

      <DataTable columns={columns} data={data} />
    </>
  );
};

export default page;
