"use client";

import RowNumber from "@/components/row-number";
import { persianPriceFormat } from "@/lib/persian-price-format";
import { jaliliDate } from "@/lib/jalali-date";
import { farsiNumber } from "@/lib/farsi-number";
import InstallmentCellAction from "./installment-cell-action";
import CellActionInstallment from "./cell-action-installment";

export const columns = [
  {
    id: "#",
    header: "#",
    cell: ({ row }) => {
      return <RowNumber number={row.index + 1} />;
    },
  },

  // {
  //   id: "factor_id",
  //   header: "شماره فاکتور",
  //   cell: ({ row }) => {
  //     return <span>{farsiNumber(row.original?.factor_id)}</span>;
  //   },
  // },

  {
    id: "amount",
    header: "مبلغ اولیه",
    cell: ({ row }) => {
      return <span>{persianPriceFormat(+row.original?.amount)} تومان</span>;
    },
  },

  {
    id: "delay_fine",
    header: "جریمه دیرکرد",
    cell: ({ row }) => {
      return <p className={`${+row.original?.delay_fine === 0 ? "text-black" : "text-red-600"}`}>{persianPriceFormat(+row.original?.delay_fine)} تومان</p>;
    },
  },

  {
    id: "final_amount",
    header: "مبلغ قابل پرداخت",
    cell: ({ row }) => {
      return (
        <span>{persianPriceFormat(+row.original?.final_amount)} تومان</span>
      );
    },
  },

  {
    id: "due_date",
    header: "سررسید",
    cell: ({ row }) => {
      return <span>{farsiNumber(jaliliDate(row.original?.due_date))} </span>;
    },
  },

  {
    id: "delay_days",
    header: "دیرکرد (روز)",
    cell: ({ row }) => {
      return <p className={`${+row.original?.delay_days === 0 ? "text-black" : "text-red-600"}`}>{persianPriceFormat(+row.original?.delay_days)}</p>;
    },
  },

  // {
  //   id: "status",
  //   header: "وضعیت",
  //   cell: ({ row }) => {
  //     return (
  //       <div>
  //         {row.original.status === "in_due" && (
  //           <span className="text-yellow-500">در انتظار پرداخت</span>
  //         )}
  //         {row.original.status === "paid" && (
  //           <span className="text-green-500">تسویه شده</span>
  //         )}
  //         {row.original.status === "delayed" && (
  //           <span className="text-red-500">دیرکرد در پرداخت</span>
  //         )}
  //       </div>
  //     );
  //   },
  // },

  {
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => <CellActionInstallment data={row.original} />,
  },
  // {
  //   id: "actions",
  //   header: "اقدامات",
  //   cell: ({ row }) => <InstallmentCellAction data={row.original} />,
  // },
];
