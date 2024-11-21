"use client";

import RowNumber from "@/components/row-number";

export const columns = [
  {
    id: "#",
    header: "#",
    cell: ({ row }) => {
      return <RowNumber number={row.index + 1} />;
    },
  },

  {
    accessorKey: "name",
    header: "عنوان",
  },
];
