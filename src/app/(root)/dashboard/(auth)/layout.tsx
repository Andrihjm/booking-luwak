import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      {children}
    </main>
  );
}
