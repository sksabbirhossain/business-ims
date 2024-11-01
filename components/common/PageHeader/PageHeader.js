import Link from "next/link";
import React from "react";

const PageHeader = ({ headText, link, linkName }) => {
  return (
    <div className="flex items-center justify-between rounded-md bg-white px-2 py-3 shadow-sm shadow-primary">
      <h1 className="text-lg font-semibold uppercase text-text">{headText}</h1>
      {link && linkName && (
        <Link href={link}>
          <span className="rounded bg-primary px-3 py-1 text-white capitalize font-medium hover:bg-secondary transition-all ease-in-out duration-200">
            {linkName}
          </span>
        </Link>
      )}
    </div>
  );
};

export default PageHeader;
