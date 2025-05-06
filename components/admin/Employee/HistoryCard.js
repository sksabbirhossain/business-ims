/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { format } from "date-fns";
import HistoryCardActionButtons from "./HistoryCardActionButtons";

const HistoryCard = ({ salary, employeeId }) => {
  return (
    <div className="group relative flex w-full justify-evenly gap-x-2 rounded bg-secondary/90 py-1 text-gray-50 sm:gap-x-5">
      <p className="text-start">
        <span className="block text-nowrap text-sm font-medium uppercase">
          Paided Month
        </span>
        <span className="block text-nowrap text-[16px] font-semibold">
          {format(new Date(salary?.month), "MMM yyyy")}
        </span>
      </p>
      <p className="text-start">
        <span className="block text-nowrap text-sm font-medium uppercase">
          Amount
        </span>
        <span className="block text-nowrap text-[16px] font-semibold">
          {salary?.amount} Tk
        </span>
      </p>
      <p className="text-start">
        <span className="block text-nowrap text-sm font-medium uppercase">
          Paided Date
        </span>
        <span className="block text-nowrap text-[16px] font-semibold">
          {format(new Date(salary?.paidAt), "dd MMM yyyy")}
        </span>
      </p>

      <HistoryCardActionButtons salary={salary} employeeId={employeeId} />
    </div>
  );
};

export default HistoryCard;
