"use client";

import SearchTable from "@/components/search-table";
import RowNumber from "@/components/row-number";
import CellAction from "./cell-action";
import Image from "next/image";
import { blogIcon } from "@/constants/icons";
import Link from "next/link";

export const columns = [
  {
    id: "#",
    header: "#",
    cell: ({ row }) => {
      return <RowNumber number={row.index + 1} />;
    },
  },

  {
    accessorKey: "photo",
    header: "تصویر",
    cell: ({ row }) => {
      return row.original.photo ? (
        <Image
          src={row.original.photo}
          width={300}
          height={200}
          alt="user"
          className="mx-auto w-24 rounded-lg object-contain"
        />
      ) : (
        <Image
          src={blogIcon}
          width={300}
          height={200}
          alt="blog"
          className="mx-auto w-24 rounded-lg object-contain"
        />
      );
    },
  },

  {
    accessorKey: "key",
    header: "عنوان",
  },

  {
    accessorKey: "link",
    header: "لینک",
    cell: ({ row }) => (
      <Link
        target="_blank"
        href={row.original.link}
        className="text-blue-500 hover:border-b-blue-500 hover:border-b"
      >
        {row.original.link}
      </Link>
    ),
  },

  {
    id: "actions",
    header: "اقدامات",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
