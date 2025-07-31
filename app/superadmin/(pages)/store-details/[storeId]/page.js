/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getStoreDetails } from "@/actions/superAdmin/store/storeActions";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import ChangeActiveStatusComponent from "@/components/superAdmin/Store/ChangeActiveStatusComponent";
import { format } from "date-fns";

export const metadata = {
  title: "Store Details",
};

const page = async ({ params }) => {
  const storeId = (await params).storeId;

  // Here you can fetch store details using the storeId
  const storeDetails = await getStoreDetails(storeId);

  // If storeDetails is not found
  if (!storeDetails?.data) {
    return (
      <Container>
        <PageHeader headText="Store Details" />
        <div className="rounded-lg bg-white p-4 shadow-md">
          <p className="text-center font-medium capitalize text-red-500">
            Store not found!
          </p>
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <PageHeader headText="store Details" />
      {/* Store details content */}
      <div className="rounded-lg bg-white/50 px-2 py-3 shadow-md shadow-primary backdrop-blur">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-3">
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold capitalize text-black">
                Store Name
              </h2>
              <p className="text-[15px] font-medium text-gray-600">
                {storeDetails?.data?.storeName || "N/A"}
              </p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold capitalize text-black">
                store owner name
              </h2>
              <p className="text-[15px] font-medium text-gray-600">
                {storeDetails?.data?.ownerName || "N/A"}
              </p>
            </div>
            <div className="space-y-1 rounded p-3 text-black shadow">
              <h2 className="text-md font-semibold capitalize">Email</h2>
              <p className="text-[15px] font-medium text-gray-600">
                {storeDetails?.data?.email || "N/A"}
              </p>
            </div>
            <div className="space-y-1 rounded p-3 text-black shadow">
              <h2 className="text-md font-semibold capitalize">Phone number</h2>
              <p className="text-[15px] font-medium text-gray-600">
                {storeDetails?.data?.phone || "N/A"}
              </p>
            </div>
            <div className="space-y-1 rounded p-3 text-black shadow">
              <h2 className="text-md font-semibold capitalize">website</h2>
              <p className="text-[15px] font-medium text-gray-600">
                {storeDetails?.data?.website || "N/A"}
              </p>
            </div>
            <div className="space-y-1 rounded p-3 text-black shadow">
              <h2 className="text-md font-semibold capitalize">address</h2>
              <p className="text-[15px] font-medium text-gray-600">
                {storeDetails?.data?.address || "N/A"}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold capitalize text-black">
                current subscription
              </h2>
              <div className="flex items-center justify-between gap-2">
                <p className="text-[15px] font-medium text-gray-800">
                  <span className="block font-medium capitalize text-gray-700">
                    plan name
                  </span>
                  <span className="block capitalize text-gray-600">
                    {storeDetails?.data?.subscription?.plan || "N/A"}
                  </span>
                </p>
                <p className="text-[15px] font-medium text-gray-800">
                  <span className="block font-medium capitalize">
                    plan start date
                  </span>
                  <span className="block text-gray-600">
                    {storeDetails?.data?.subscription?.endDate
                      ? format(
                          new Date(storeDetails?.data?.subscription?.startDate),
                          "dd MMM yyyy",
                        )
                      : "N/A"}
                  </span>
                </p>
                <p className="text-[15px] font-medium text-gray-800">
                  <span className="block font-medium capitalize">
                    plan end date
                  </span>
                  <span className="block text-gray-600">
                    {storeDetails?.data?.subscription?.endDate
                      ? format(
                          new Date(storeDetails?.data?.subscription?.endDate),
                          "dd MMM yyyy",
                        )
                      : "N/A"}
                  </span>
                </p>
              </div>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold capitalize">
                created store date
              </h2>
              <p className="text-[15px] font-medium text-gray-600">
                {format(
                  new Date(storeDetails?.data?.createdAt),
                  "dd MMM yyyy",
                ) || "N/A"}
              </p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold capitalize">
                active status
              </h2>
              {/* change active status */}
              <ChangeActiveStatusComponent storeDetails={storeDetails} />
            </div>
            {/* show subscription history */}
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold capitalize">
                subscription history
              </h2>

              <div className="space-y-1">
                {storeDetails?.data?.subscriptionHistory?.length > 0 ? (
                  storeDetails?.data?.subscriptionHistory?.map((history, i) => (
                    <div
                      key={i}
                      className="flex flex-wrap items-center justify-between gap-5 rounded bg-white/10 px-2 py-3 shadow-sm shadow-primary/50 backdrop-blur"
                    >
                      <p className="text-[15px] font-medium">
                        <span className="block capitalize text-gray-800">
                          {history?.plan} plan
                        </span>
                        <span className="block text-gray-600">
                          {" "}
                          {history?.paymentDate
                            ? format(
                                new Date(history?.paymentDate),
                                "dd MMM yyyy",
                              )
                            : "N/A"}{" "}
                          To{" "}
                          {history?.expiryDate
                            ? format(
                                new Date(history?.expiryDate),
                                "dd MMM yyyy",
                              )
                            : "N/A"}
                        </span>
                      </p>
                      <p className="text-[15px] font-medium capitalize text-gray-600">
                        <span className="block text-gray-800"> Status</span>
                        {history?.status || "N/A"}
                      </p>
                      <p className="text-[15px] font-medium text-gray-600">
                        <span className="block text-gray-800"> amount</span>
                        {history?.paymentAmount
                          ? `$${history?.paymentAmount}`
                          : "N/A"}
                      </p>
                      {/* show payment method */}
                      <p className="text-[15px] font-medium text-gray-600">
                        <span className="block text-gray-800"> Method</span>
                        {history?.paymentMethod || "N/A"}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">
                    No subscription history found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
