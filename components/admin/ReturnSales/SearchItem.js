import FormInput from "@/components/common/FormInput/FormInput";
import Image from "next/image";
import { useState } from "react";

const SearchItem = ({ item, customer }) => {
  const [qty, setQty] = useState(item.qty);
  return (
    <tr className="border-b text-center odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10">
      <td className="flex w-full items-center justify-center px-1 py-2">
        <Image
          src={"/default.jpg"}
          alt="product image"
          width={200}
          height={200}
          className="h-[35px] w-[35px] rounded-full object-cover ring-1 ring-primary"
        />
      </td>
      <th
        scope="row"
        className="whitespace-nowrap px-2 py-4 font-medium text-gray-900"
      >
        {item.product.name.substr(0, 20)}...
      </th>
      <td className="px-1 py-2 whitespace-nowrap"> {customer?.name} </td>
      <td className="text-nowrap px-1 py-2">
        <p className="flex w-full items-center justify-center gap-2">
          <input
            className="w-[100px] rounded-[3px] border border-primary text-center focus:outline-none"
            type="number"
            min={0}
            max={item?.qty}
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          - <span>{item?.product?.uom}</span>
        </p>
      </td>
      <td className="px-1 py-2"> {item?.price} Tk. </td>
      <td className="px-1 py-2">
        <button className="text-primary hover:text-primary/80">Return</button>
      </td>
    </tr>
  );
};

export default SearchItem;
