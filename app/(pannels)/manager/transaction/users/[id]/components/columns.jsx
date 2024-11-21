"use client";

import RowNumber from "@/components/row-number";
import { persianPriceFormat } from "@/lib/persian-price-format";
import CellAction from "./cell-action";
import { jaliliDate, jaliliDateHour } from "@/lib/jalali-date";
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
    id: "type",
    header: "نوع تراکنش",
    cell: ({ row }) => {
      return <span>{row.original?.type}</span>;
    },
  },

  {
    id: "amount",
    header: "مبلغ",
    cell: ({ row }) => {
      return <span>{persianPriceFormat(+row.original?.amount)} تومان</span>;
    },
  },

  {
    id: "status",
    header: "وضعیت",
    cell: ({ row }) => {
      return <span>{row.original?.status === "failed"
        ? "ناموفق"
        : row.original?.status === "paid"
          ? "موفق"
          : row.original?.status === "pending"
            ? "در انتظار"
            : ""} </span>;
    },
  },

  {
    id: "reference_id",
    header: "شناسه پیگیری",
    cell: ({ row }) => {
      return <span>{farsiNumber(row.original?.reference_id)}</span>;
    },
  },

  {
    id: "date",
    header: "تاریخ",
    cell: ({ row }) => {
      return <span>{farsiNumber(jaliliDate(row.original?.updated_at))} </span>;
    },
  },

  {
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
