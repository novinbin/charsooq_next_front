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
    id: "name",
    header: "نام و نام خانوادگی",
    cell: ({ row }) => {
      return <span>{row.original?.user?.name}</span>;
    },
  },

  {
    id: "total_price",
    header: "مبلغ کل",
    cell: ({ row }) => {
      return (
        <span>{persianPriceFormat(+row.original?.total_price)} تومان</span>
      );
    },
  },
  
  {
    id: "date",
    header: "تاریخ ایجاد",
    cell: ({ row }) => {
      return <span>{farsiNumber(jaliliDate(row.original?.date))} </span>;
    },
  },
  {
    id: "installment_count",
    header: "تعداد کل اقساط",
    cell: ({ row }) => {
      return <span>{farsiNumber(row.original?.installment_count)}</span>;
    },
  },
  {
    id: "unpaid_delayed_installment_count",
    header: "تعداد اقساط معوق و پرداخت نشده",
    cell: ({ row }) => {
      return <span>{farsiNumber(row.original?.unpaid_delayed_installment_count)}</span>;
    },
  },

    {
      id: "unpaid_delayed_installment_amount",
      header: "مجموع مبلغ معوق و پرداخت نشده",
      cell: ({ row }) => {
        return (
          <span>{persianPriceFormat(+row.original?.unpaid_delayed_installment_amount)} تومان</span>
        );
      },
    },




  {
    id: "paid_installments",
    header: "تعداد اقساط پرداخت کرده",
    cell: ({ row }) => {
      return <span>{farsiNumber(row.original?.paid_installments)}</span>;
    },
  },

  {
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
