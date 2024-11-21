"use client";

import RowNumber from "@/components/row-number";
import { farsiNumber } from "@/lib/farsi-number";
import { cn } from "@/lib/utils";
import CellAction from "./cell-action";

export const columns = [
  {
    id: "#",
    header: "#",
    cell: ({ row }) => {
      return <RowNumber number={row.index + 1} />;
    },
  },

  {
    accessorKey: "Code",
    header: "کد کالا",
  },

  {
    accessorKey: "Title",
    header: "عنوان",
  },

  {
    accessorKey: "Barcode",
    header: "کد برند",
  },

  {
    id: "PropertyValues",
    header: "ویژگی ها",
    cell: ({ row }) => {
      return (
        <div className="flex flex-wrap justify-center gap-3 text-xs">
          {row.original.PropertyValues.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-2 pl-3",
                index + 1 !== row.original.PropertyValues.length &&
                  "border-l border-l-primary",
              )}
            >
              <span>{item.PropertyTitle} :</span>
              <span>{item.Value}</span>
            </div>
          ))}
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
