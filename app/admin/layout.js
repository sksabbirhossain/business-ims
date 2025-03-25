import Header from "@/components/admin/Header/Header";
import Sidebar from "@/components/admin/Sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div className="relative h-full min-h-screen w-full">
      <Header />
      <Sidebar />
      <div className="pt-[45px] sm:ml-52">
        <div className="fixed top-0 -z-20 h-screen w-full bg-gradient-to-r from-primary/40 via-secondary/30 to-primary/60 blur-[90px]" />
        <div className="p-2 sm:p-4">{children}</div>
      </div>
    </div>
  );
}

// bg-[url(/defaultLogo.png)] bg-center
