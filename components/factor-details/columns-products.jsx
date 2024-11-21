"use client";

import RowNumber from "@/components/row-number";
import { persianPriceFormat } from "@/lib/persian-price-format";
import { farsiNumber } from "@/lib/farsi-number";

export const columnsProducts = [
  {
    id: "#",
    header: "ردیف",
    cell: ({ row }) => {
      return <RowNumber number={row.index + 1} />;
    },
  },

  {
    id: "code",
    header: "کد محصول",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center">
          <span>{farsiNumber(row.original?.code)}</span>
        </div>
      );
    },
  },

  {
    accessorKey: "title",
    header: "عنوان محصول",
  },

  {
    id: "price",
    header: "قیمت واحد (تومان)",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center">
          <span>{persianPriceFormat(+row.original?.price)}</span>
        </div>
      );
    },
  },

  {
    id: "count",
    header: "تعداد",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center">
          <span>{farsiNumber(row.original?.count)}</span>
        </div>
      );
    },
  },

  {
    id: "total",
    header: "قیمت کل (تومان)",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center">
          <span>{persianPriceFormat(+row.original?.total)}</span>
        </div>
      );
    },
  },
];
