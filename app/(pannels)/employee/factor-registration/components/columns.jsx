"use client";

import SearchTable from "@/components/search-table";
import RowNumber from "@/components/row-number";
import CellAction from "./cell-action";

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
  },

  {
    accessorKey: "code",
    header: "کد معرف",
  },

  {
    accessorKey: "national_code",
    header: "کد ملی",
  },

  {
    accessorKey: "postal_code",
    header: "کد پستی",
  },

  {
    accessorKey: "address",
    header: "آدرس",
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
