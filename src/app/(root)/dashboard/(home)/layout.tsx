import Navigation from "@/components/shared/navigation";
import Sidebar from "@/components/shared/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Sign-in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
