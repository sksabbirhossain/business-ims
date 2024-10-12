import React from "react";

const PageHeader = ({ headText }) => {
  return (
    <div className="rounded-md bg-white px-2 py-3 shadow-sm shadow-gray-300">
      <h1 className="text-lg font-semibold uppercase text-text">{headText}</h1>
    </div>
  );
};

export default PageHeader;
