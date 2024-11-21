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
    header: "مشتری",
    cell: ({ row }) => {
      return <span>{row.original?.user?.name}</span>;
    },
  },

  {
    id: "id",
    header: "شماره فاکتور",
    cell: ({ row }) => {
      return <span>{farsiNumber(row.original?.id)}</span>;
    },
  },

    {
      id: "dashtId",
      header: "شماره فاکتور دشت",
      cell: ({ row }) => {
        return (
          <span>{farsiNumber(row.original?.dasht_info?.SaleInvoiceID)}</span>
        );
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
    id: "final_price",
    header: "مبلغ نهایی (با احتساب تخفیف)",
    cell: ({ row }) => {
      return (
        <span>{persianPriceFormat(+row.original?.final_price)} تومان</span>
      );
    },
  },

  {
    id: "final_price",
    header: "مبلغ تخفیف",
    cell: ({ row }) => {
      return <span>{farsiNumber(row.original?.discount)} درصد</span>;
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
    header: "تعداد اقساط",
    cell: ({ row }) => {
      return <span>{farsiNumber(row.original?.installment_count)}</span>;
    },
  },
  {
    id: "installment_amount",
    header: "مبلغ هر قسط(پایه)",
    cell: ({ row }) => {
      return (
        <span>{persianPriceFormat(+row.original?.installment_amount)} تومان</span>
      );
    },
  },
  {
    id: "description",
    header: "توضیحات",
    cell: ({ row }) => {
      return (
        <span>{farsiNumber(row.original?.description)} </span>
      );
    },
  },

  {
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
