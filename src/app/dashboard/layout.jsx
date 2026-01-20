import SideBar from "@/components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <SideBar />
      <main className="flex-1 ml-64 p-8">{children}</main>
    </div>
  );
}
