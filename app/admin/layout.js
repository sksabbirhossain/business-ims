import Header from "@/components/admin/Header/Header";
import Sidebar from "@/components/admin/Sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div className="relative h-full min-h-screen w-full">
      <Header />
      <Sidebar />
      <div className="pt-[45px] sm:ml-52">
        <div className="min-h-[93vh] bg-red-100/30 p-2 sm:p-4">{children}</div>
      </div>
    </div>
  );
}
