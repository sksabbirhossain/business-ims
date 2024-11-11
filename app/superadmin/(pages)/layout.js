import Header from "@/components/superAdmin/Header/Header";
import Sidebar from "@/components/superAdmin/Sidebar/Sidebar";



export default function RootLayout({ children }) {
  return (
    <div className="h-full min-h-screen w-full bg-bg">
      <Header />
      <Sidebar />
      <div className="pt-[45px] sm:ml-52">
        <div className="p-2 sm:p-4">{children}</div>
      </div>
    </div>
  );
}
