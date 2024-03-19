import Sidebar from "@/components/Admin/Sidebar";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={`container mx-auto p-4 h-full flex md:gap-4`}>
      <Sidebar />
      <div className="flex-grow">{children}</div>
    </section>
  );
}
