"use client";

import SearchTable from "@/components/search-table";
import RowNumber from "@/components/row-number";
import CellAction from "./cell-action";
import { jaliliDate } from "@/lib/jalali-date";
import { farsiNumber } from "@/lib/farsi-number";
import { persianPriceFormat } from "@/lib/persian-price-format";

export const columns = [
  {
    id: "#",
    header: "#",
    cell: ({ row }) => {
      return <RowNumber number={row.index + 1} />;
    },
  },

  {
    accessorKey: "code",
    header: "کد تخفیف",
  },

  {
    id: "type",
    header: "نوع",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.type === "cash" ? (
            <span className="text-green-500">نقدی</span>
          ) : (
            <span className="text-blue-500">درصدی</span>
          )}
        </div>
      );
    },
  },

  {
    id: "user",
    header: "مشتری",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.user_id ? (
            <span>{row.original.user_id}</span>
          ) : (
            <span>همه مشتریان</span>
          )}
        </div>
      );
    },
  },

  {
    id: "expiration",
    header: "تاریخ انقضا",
    cell: ({ row }) => {
      return (
        <div>
          <span>{farsiNumber(jaliliDate(row.original.expiration))}</span>
        </div>
      );
    },
  },

  {
    id: "discount_rate",
    header: "مبلغ تخفیف",
    cell: ({ row }) => {
      return (
        <div>
          <span>{farsiNumber(row.original.discount_rate)} درصد</span>
        </div>
      );
    },
  },

  {
    id: "amount",
    header: "مبلغ تخفیف",
    cell: ({ row }) => {
      return (
        <div>
          <span>{persianPriceFormat(+row.original.amount)} تومان</span>
        </div>
      );
    },
  },

  {
    id: "max_discount",
    header: "حداکثر مبلغ تخفیف",
    cell: ({ row }) => {
      return (
        <div>
          <span>{persianPriceFormat(+row.original.max_discount)} تومان</span>
        </div>
      );
    },
  },

  {
    id: "created_at",
    header: "تاریخ ایجاد",
    cell: ({ row }) => {
      return (
        <div>
          <span>{farsiNumber(jaliliDate(row.original.created_at))}</span>
        </div>
      );
    },
  },

  {
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
