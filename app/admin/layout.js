import Header from "@/components/common/Header/Header";
import Sidebar from "@/components/common/Sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div className="bg-bg h-full min-h-screen w-full">
      <Header />
      <Sidebar />
      <div className="pt-[45px] sm:ml-52">
        <div className="p-2 sm:p-4">{children}</div>
      </div>
    </div>
  );
}
