"use client";

import RowNumber from "@/components/row-number";
import { farsiNumber } from "@/lib/farsi-number";
import { persianPriceFormat } from "@/lib/persian-price-format";
import { jaliliDate } from "@/lib/jalali-date";
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
    accessorKey: "total_price",
    header: "مبلغ",
    cell: ({ row }) => (
      <span>{persianPriceFormat(+row.original.amount)} تومان</span>
    ),
  },

  {
    accessorKey: "description",
    header: "توضیحات",
    cell: ({ row }) => (
      <div className="max-w-96">
        <span>{row.original.description}</span>
      </div>
    ),
  },

  {
    accessorKey: "status",
    header: "وضعیت",
    cell: ({ row }) => (
      <div>
        {row.original.status === "approved" && (
          <span className="text-green-500">تایید شده</span>
        )}
        {row.original.status === "pending" && (
          <span className="text-yellow-500">در انتظار تایید</span>
        )}
        {row.original.status === "rejected" && (
          <span className="text-red-500">رد شده</span>
        )}
      </div>
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
];
