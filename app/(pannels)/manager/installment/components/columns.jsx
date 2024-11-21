"use client";

import SearchTable from "@/components/search-table";
import RowNumber from "@/components/row-number";
import CellAction from "./cell-action";
import { persianPriceFormat } from "@/lib/persian-price-format";
import { farsiNumber } from "@/lib/farsi-number";

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
    header: ({ column }) => (
      <div className="mt-2 flex flex-col gap-1">
        <span>نام و نام خانوادگی</span>
        <SearchTable queryTitle="name" />
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <div className="mt-2 flex flex-col gap-1">
        <span>شماره تماس</span>
        <SearchTable queryTitle="phone" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <span>{farsiNumber(row?.original?.phone)}</span>
      </div>
    ),
  },
  {
    accessorKey: "delay_sum",
    header: "روز های تاخیر",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <span>{farsiNumber(row?.original?.delay_sum)}</span>
      </div>
    ),
  },

  {
    accessorKey: "delay_count",
    header: "تعداد اقساط معوقه",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <span>{farsiNumber(row?.original?.delay_count)}</span>
      </div>
    ),
  },
  {
    accessorKey: "delay_count",
    header: "مجموع اقساط معوقه",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <span>{farsiNumber(row?.original?.delay_amount)}</span>
      </div>
    ),
  },

 


  {
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
