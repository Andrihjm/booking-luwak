import Link from "next/link";
import { Plane } from "lucide-react";
import { Button } from "../ui/button";
import { sidebarArray } from "@/data-array/sidebar-array";
import LogOutButton from "@/app/(root)/dashboard/(auth)/form/log-out-button";

const Sidebar = () => {
  return (
    <>
      <div className="w-[20%] min-h-screen p-5 grow-0 shadow space-y-5">
        <div className="space-y-2">
          <Link href={"/dashboard/airplanes"}>
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-start gap-2"
            >
              <Plane size={20} /> Airplanes
            </Button>
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="mb-2 text-xs font-bold uppercase">Master Data</h1>

          {sidebarArray.map((item: any) => (
            <Link key={item.id} href={item.path}>
              <Button
                variant={"ghost"}
                className="w-full flex items-center justify-start gap-2"
              >
                <item.icons size={20} /> {item.name}
              </Button>
            </Link>
          ))}
        </div>

        <LogOutButton />
      </div>
    </>
  );
};

export default Sidebar;
