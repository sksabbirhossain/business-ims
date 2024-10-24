"use client";

import useMobileMenu from "@/contexts/mobileMenuContext";
import sidebarRoutes from "@/utils/sidebarRoutes";
import MenuItems from "./MenuItems";

const Sidebar = () => {
  const { menuOpen, mobileMenuHandler } = useMobileMenu();

  return (
    <div>
      {menuOpen && (
        <div
          className="fixed top-[45px] z-30 block h-screen w-full bg-black/50 sm:hidden"
          onClick={mobileMenuHandler}
        />
      )}
      <aside
        className={`fixed left-0 top-[45px] z-40 h-screen w-52 -translate-x-full bg-[url('/sidebar-bg.jpg')] pb-[45px] transition-transform sm:translate-x-0 ${menuOpen ? "translate-x-0" : ""}`}
      >
        <div className="sidebar-scrollbar-customize h-full overflow-y-auto bg-white/80 py-2 shadow-sm shadow-gray-400 backdrop-blur">
          <ul className="space-y-1 text-[15px] font-medium">
            {sidebarRoutes?.map((item, i) => (
              <MenuItems key={i} item={item} />
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
