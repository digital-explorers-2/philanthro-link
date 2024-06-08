import SideBar from "@/components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <div className="flex-grow p-6 md:ml-12">
        <div className="flex justify-between items-center mb-6">{children}</div>
      </div>
    </div>
  );
}
