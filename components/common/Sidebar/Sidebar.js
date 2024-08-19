import sidebarRoutes from "@/utils/sidebarRoutes";
import MenuItems from "./MenuItems";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-[45px] z-40 h-screen w-52 -translate-x-full pb-[45px] transition-transform sm:translate-x-0">
      <div className="sidebar-scrollbar-customize h-full overflow-y-auto bg-white py-2 shadow-sm shadow-gray-400">
        <ul className="space-y-1 text-[15px] font-medium">
          {sidebarRoutes?.map((item, i) => (
            <MenuItems key={i} item={item} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

{
  /* <li>
  <button
    type="button"
    className="group flex w-full items-center rounded-md p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100"
  >
    <svg
      className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 18 21"
    >
      <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
    </svg>
    <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
      E-commerce
    </span>
    <svg
      className="h-3 w-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>

  <ul id="dropdown-example" className="hidden space-y-2 py-2">
    <li>
      <a
        href="#"
        className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        Products
      </a>
    </li>
    <li>
      <a
        href="#"
        className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        Billing
      </a>
    </li>
  </ul>
</li>; */
}
