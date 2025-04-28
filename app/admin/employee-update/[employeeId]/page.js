/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getAEmployee } from "@/actions/storeAdmin/employee/employeeActions";
import EmployeeUpdateForm from "@/components/admin/Employee/EmployeeUpdateForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const metadata = {
  title: "Update Employee",
};

const UpdateEmployee = async ({ params }) => {
  const employeeId = (await params).employeeId;

  const employee = await getAEmployee(employeeId);
  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="add purchase" />

      <div className="flex h-full min-h-[75vh] w-full items-center justify-center rounded-md bg-white/50 p-4 px-2 py-5 shadow-sm shadow-primary backdrop-blur">
        <div className="w-full max-w-[600px]">
          {/* update employee form */}
          <EmployeeUpdateForm employee={employee} />
        </div>
      </div>
    </Container>
  );
};

export default UpdateEmployee;
