import Navigation from "@/components/shared/navigation";
import Sidebar from "@/components/shared/sidebar";
import { getUser } from "@/lib/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, session } = await getUser();

  if (session === null || user.role === "CUSTOMER") {
    redirect("/dashboard/sign-in");
  }

  return (
    <>
      <Navigation />
      <div className="flex">
        <Sidebar />
        <div className="w-full p-5">{children}</div>
      </div>
    </>
  );
}
