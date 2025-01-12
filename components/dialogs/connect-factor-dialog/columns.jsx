"use client";

// import RowNumber from "@/components/row-number";
import CellAction from "./cell-action";
import { farsiNumber } from "@/lib/farsi-number";
import { jaliliDateHour } from "@/lib/jalali-date";
import { persianPriceFormat } from "@/lib/persian-price-format";

export const columns = [
  // {
  //   id: "#",
  //   header: "#",
  //   cell: ({ row }) => {
  //     return <RowNumber number={row.index + 1} />;
  //   },
  // },

  {
    accessorKey: "Number",
    header: "شماره فاکتور",
    cell: ({ row }) => (
      <div className="flex items-center justify-center gap-2">
        {farsiNumber(row.original?.SaleInvoiceID)}
      </div>
    ),
  },

  {
    accessorKey: "TotalPrice",
    header: "قیمت کل",
    cell: ({ row }) => (
      <div className="flex items-center justify-center gap-2">
        {persianPriceFormat(+row.original?.TotalPrice)}
      </div>
    ),
  },

  {
    accessorKey: "Date",
    header: "تاریخ",
    cell: ({ row }) => (
      <div className="flex items-center justify-center gap-2">
        {farsiNumber(jaliliDateHour(row.original?.Date))}
      </div>
    ),
  },

  {
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
