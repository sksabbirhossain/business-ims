import React from "react";
import ActionButtons from "./ActionButtons";

const BankItem = ({ bank }) => {
  return (
    <tr className="text-nowrap border-b text-center odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10">
      <th
        scope="row"
        className="whitespace-nowrap px-2 py-4 font-medium capitalize text-gray-900"
      >
        {bank?.name}
      </th>
      <td className="px-2 py-1 font-medium">{bank?.accountNumber}</td>
      <td className="px-2 py-1">
        {/* action buttons */}
        <ActionButtons id={bank?._id} />
      </td>
    </tr>
  );
};

export default BankItem;
