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
    accessorKey: "code",
    header: "کد معرف",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <span>{farsiNumber(row?.original?.code)}</span>
      </div>
    ),
  },

  {
    accessorKey: "national_code",
    header: "کد ملی",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <span>{farsiNumber(row?.original?.national_code)}</span>
      </div>
    ),
  },

  {
    accessorKey: "balance",
    header: ({ column }) => (
      <div className="flex flex-col gap-1">
        <span>اعتبار</span>
        <span>(تومان)</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <span>{persianPriceFormat(+row?.original?.balance)}</span>
      </div>
    ),
  },

  {
    accessorKey: "wallet",
    header: ({ column }) => (
      <div className="flex flex-col gap-1">
        <span>کیف پول</span>
        <span>(تومان)</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <span>{persianPriceFormat(+row?.original?.wallet)}</span>
      </div>
    ),
  },

  {
    accessorKey: "points",
    header: "امتیاز",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <span>{farsiNumber(row?.original?.points)}</span>
      </div>
    ),
  },

  {
    id: "role",
    header: "سطح دسترسی",
    cell: ({ row }) => (
      <div>
        {row.original.role === "manager"
          ? "مدیر"
          : row.original.role === "employee"
            ? "پرسنل"
            : row.original.role === "author"
              ? "نویسنده"
              : "مشتری"}
      </div>
    ),
  },

  {
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
