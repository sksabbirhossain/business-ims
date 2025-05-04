/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getAEmployee } from "@/actions/storeAdmin/employee/employeeActions";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import { format } from "date-fns";

const EmployeeDetails = async ({ params }) => {
  const employeeId = (await params).employeeId;
  const employee = await getAEmployee(employeeId);
  return (
    <Container>
      <PageHeader headText="employee Details" />
      {/* details */}
      <div className="rounded-lg bg-white p-4 shadow-md">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-3">
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold capitalize">
                Employee Name
              </h2>
              <p className="text-gray-800">{employee?.data?.name}</p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold capitalize">
                Employee email
              </h2>
              <p className="text-gray-800">{employee?.data?.email}</p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold capitalize">
                Employee phone
              </h2>
              <p className="text-gray-800">{employee?.data?.phone}</p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold capitalize">
                Employee position
              </h2>
              <p className="text-gray-800">{employee?.data?.position}</p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold capitalize">
                Employee joining date
              </h2>
              <p className="text-gray-800">
                {format(new Date(employee?.data?.joiningDate), "dd MMM yyyy")}
              </p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold capitalize">
                Employee monthly Salary
              </h2>
              <p className="text-gray-800">
                {employee?.data?.monthlySalary} Tk.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-3 rounded shadow shadow-primary">
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold capitalize">
                  salary History
                </h2>
                <div className="flex flex-wrap gap-5">
                  {employee?.data?.salaryHostory?.length > 0 ? (
                    employee?.data?.salaryHostory.map((salary, i) => (
                      <p
                        className="rounded bg-primary p-2 text-gray-800"
                        key={i}
                      >
                        {salary?.month}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm font-semibold capitalize">
                      No salary History found!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EmployeeDetails;
