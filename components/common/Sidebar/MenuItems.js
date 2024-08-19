import Link from "next/link";

const MenuItems = ({ item }) => {
  return (
    <li>
      <Link
        href={item?.path}
        className="group flex items-center rounded-sm p-2 px-3 text-gray-900 hover:bg-gray-100"
      >
        <span className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900">
          {item?.icon}
        </span>
        <span className="ms-2">{item?.name}</span>
      </Link>
    </li>
  );
};

export default MenuItems;
