"use client";

import Image from "next/image";
import SearchTable from "@/components/search-table";
import RowNumber from "@/components/row-number";
import CellAction from "./cell-action";
import { blogIcon } from "@/constants/icons";
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
    accessorKey: "image",
    header: "تصویر",
    cell: ({ row }) => {
      return row.original.photo ? (
        <Image
          src={row.original.photo}
          width={300}
          height={200}
          alt="user"
          className="aspect-video w-24 rounded-lg"
        />
      ) : (
        <Image
          src={blogIcon}
          width={300}
          height={200}
          alt="blog"
          className="aspect-video w-24 rounded-lg"
        />
      );
    },
  },

  {
    accessorKey: "title",
    header: ({ column }) => (
      <div className="mt-2 flex flex-col gap-1">
        <span>عنوان</span>
        <SearchTable queryTitle="title" />
      </div>
    ),
  },

  {
    accessorKey: "slug",
    header: "slug",
  },

  {
    id: "views",
    header: "تعداد بازدید",
    cell: ({ row }) => farsiNumber(row.original.views),
  },

  {
    id: "description",
    header: "توضیحات",
    cell: ({ row }) =>
      row.original.description && (
        <div>
          {row.original.description.substring(0, 60)}
          {row.original.description.length > 60 && "..."}
        </div>
      ),
  },

  {
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
