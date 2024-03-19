import Sidebar from "@/components/Projects/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects: Koray RENKLİGİL",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={`container mx-auto p-4 flex flex-col md:flex-row flex-1`}
    >
      <Sidebar />
      <main className="flex-grow px-2">{children}</main>
    </section>
  );
}
