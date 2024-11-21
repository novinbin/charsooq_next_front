"use client";

import SearchTable from "@/components/search-table";
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
    cell: ({ row }) => {
      return (
        <span>{farsiNumber(row.original?.dasht_info?.SaleInvoiceID)}</span>
      );
    },
  },

  {
    accessorKey: "total_price",
    header: "مبلغ کل",
    cell: ({ row }) => (
      <span>{persianPriceFormat(+row.original.total_price)} تومان</span>
    ),
  },

  {
    accessorKey: "discount",
    header: "مبلغ تخفیف",
    cell: ({ row }) => <span>{farsiNumber(+row.original.discount)}</span>,
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
    id: "created_at",
    header: "تاریخ ایجاد",
    cell: ({ row }) => {
      return (
        <div>
          <span>{farsiNumber(jaliliDate(row.original.date))}</span>
        </div>
      );
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
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
