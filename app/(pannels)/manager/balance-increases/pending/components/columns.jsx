"use client";

import SearchTable from "@/components/search-table";
import RowNumber from "@/components/row-number";
import CellAction from "./cell-action";
import { persianPriceFormat } from "@/lib/persian-price-format";
import Link from "next/link";
import Image from "next/image";

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
    cell: ({ row }) => <div>{row.original.user.name}</div>,
  },

  {
    accessorKey: "phone",
    header: ({ column }) => (
      <div className="mt-2 flex flex-col gap-1">
        <span>شماره تماس</span>
        <SearchTable queryTitle="phone" />
      </div>
    ),
    cell: ({ row }) => <div>{row.original.user.phone}</div>,
  },

  {
    accessorKey: "employeeName",
    header: "پرسنل",
    cell: ({ row }) => <div>{row.original.employee.name}</div>,
  },

  {
    accessorKey: "amount",
    header: "مبلغ",
    cell: ({ row }) => (
      <div>{persianPriceFormat(+row.original.amount)} تومان</div>
    ),
  },
  {
    accessorKey: "amount",
    header: "توضیحات",
    cell: ({ row }) => (
      <div className="max-w-96">{row.original.description} </div>
    ),
  },

  {
    id: "check_photo",
    header: "تصویر چک",
    cell: ({ row }) => {
      return (
        row.original.check_photo && (
          <Link
            href={row.original.check_photo}
            target="_blank"
            className="flex items-center justify-center"
          >
            <Image
              src={row.original.check_photo}
              width={360}
              height={360}
              alt="photo"
              className="aspect-video w-32 rounded-lg"
            />
          </Link>
        )
      );
    },
  },

  {
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
