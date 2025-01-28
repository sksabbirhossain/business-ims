import Button from "@/components/common/Button/Button";
import Link from "next/link";
import React from "react";

const DetailsModal = ({ setDetailsModal, detailsData }) => {
  return (
    <div className="absolute right-0 top-0 z-[890] h-screen w-full bg-black/75 sm:-ml-52">
      <div className="flex h-full w-full items-center justify-center">
        <div class="flex w-full items-center justify-center">
          <div class="w-full px-2">
            <div class="overflow-hidden rounded-lg bg-white shadow-sm">
              {/* modal top section */}
              <div class="flex items-center justify-between rounded-t border-b border-gray-200 bg-primary/25 p-2 md:p-3">
                <h3 class="text-xl font-semibold text-gray-900">
                  Supplier Info
                </h3>
                <button
                  type="button"
                  class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:text-red-600"
                  data-modal-hide="static-modal"
                  onClick={() => setDetailsModal(false)}
                >
                  <svg
                    class="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>

              {/* modal body */}
              <div class="h-[500px] space-y-4 overflow-y-auto p-2 text-gray-800 md:p-3">
                <p class="text-base leading-relaxed">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                {detailsData.name}
              </div>

              {/* modal bottom section */}
              <div class="flex items-center justify-end rounded-t border-b border-gray-200 bg-primary/25 p-2 md:p-3">
                <Link href={`/admin/supplier-update/${detailsData._id}`}>
                  <Button>Update Supplier</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
