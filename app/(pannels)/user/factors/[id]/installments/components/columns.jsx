"use client";

import RowNumber from "@/components/row-number";
import CellAction from "./cell-action";
import { farsiNumber } from "@/lib/farsi-number";
import { persianPriceFormat } from "@/lib/persian-price-format";
import { jaliliDate } from "@/lib/jalali-date";

export const columns = [
  {
    id: "#",
    header: "#",
    cell: ({ row }) => {
      return <RowNumber number={row.index + 1} />;
    },
  },

  {
    accessorKey: "id",
    header: "شماره فاکتور",
    cell: ({ row }) => <span>{farsiNumber(row.original.factor.id)}</span>,
  },

  {
    accessorKey: "total_price",
    header: "مبلغ قسط",
    cell: ({ row }) => (
      <span>{persianPriceFormat(+row.original.amount)} تومان</span>
    ),
  },

  {
    id: "created_at",
    header: "سررسید",
    cell: ({ row }) => {
      return (
        <div>
          <span>{farsiNumber(jaliliDate(row.original.due_date))}</span>
        </div>
      );
    },
  },

  {
    id: "delay_days",
    header: "دیرکرد (روز)",
    cell: ({ row }) => {
      return (
        <p
          className={`${+row.original?.delay_days === 0 ? "text-black" : "text-red-600"}`}
        >
          {persianPriceFormat(+row.original?.delay_days)}
        </p>
      );
    },
  },

  {
    id: "delay_fine",
    header: "جریمه دیرکرد",
    cell: ({ row }) => {
      return (
        <p
          className={`${+row.original?.delay_fine === 0 ? "text-black" : "text-red-600"}`}
        >
          {persianPriceFormat(+row.original?.delay_fine)} تومان
        </p>
      );
    },
  },

  {
    accessorKey: "total_price",
    header: "قیمت نهایی",
    cell: ({ row }) => (
      <span>{persianPriceFormat(+row.original.final_amount)} تومان</span>
    ),
  },

  {
    id: "status",
    header: "وضعیت",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.status === "in_due" && (
            <span className="text-yellow-500">در انتظار پرداخت</span>
          )}
          {row.original.status === "paid" && (
            <span className="text-green-500">پرداخت شده</span>
          )}
          {row.original.status === "delayed" && (
            <span className="text-red-500">تاخیر در پرداخت</span>
          )}
        </div>
      );
    },
  },

  {
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => (
      <>
        {row.original.status === "in_due" && <CellAction data={row.original} />}
        {row.original.status === "delayed" && <CellAction data={row.original} />}
      </>
    ),
  },
];
