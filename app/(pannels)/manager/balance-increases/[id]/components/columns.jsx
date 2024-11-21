"use client";

import RowNumber from "@/components/row-number";
import { persianPriceFormat } from "@/lib/persian-price-format";
import Image from "next/image";
import CellAction from "./cell-action";
import Link from "next/link";

export const columns = [
  {
    id: "#",
    header: "#",
    cell: ({ row }) => {
      return <RowNumber number={row.index + 1} />;
    },
  },

  {
    id: "name",
    header: "مشتری",
    cell: ({ row }) => {
      return <span>{row.original.user.name}</span>;
    },
  },

  {
    id: "phone",
    header: "شماره تماس مشتری",
    cell: ({ row }) => {
      return <span>{row.original.user.phone}</span>;
    },
  },

  {
    accessorKey: "employeeName",
    header: "پرسنل",
    cell: ({ row }) => <div>{row.original.employee.name}</div>,
  },

  {
    id: "amount",
    header: "مبلغ",
    cell: ({ row }) => {
      return <span>{persianPriceFormat(+row.original.amount)} تومان</span>;
    },
  },

  {
    id: "description",
    header: "توضیحات",
    cell: ({ row }) => {
      return <span className="max-w-96">{row?.original?.description}</span>;
    },
  },

  {
    id: "status",
    header: "وضعیت",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.status === "approved" && (
            <span className="text-green-500">تایید شده</span>
          )}
          {row.original.status === "pending" && (
            <span className="text-yellow-500">در حال بررسی</span>
          )}
          {row.original.status === "rejected" && (
            <span className="text-red-500">رد شده</span>
          )}
        </div>
      );
    },
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
              alt="بدون تصویر"
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
