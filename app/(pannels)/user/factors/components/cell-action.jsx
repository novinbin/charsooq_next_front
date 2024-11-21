"use client";

import Link from "next/link";
import { routes } from "@/routes/routes";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const CellAction = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <Link
        href={routes.user.factors.installments(data.id)}
        // className="w-full"
      >
        <Button
          variant="outline"
          className="flex w-full items-center gap-1 text-xs font-normal"
        >
          <Eye size={16} strokeWidth={1.5} className="text-primary" />
          <span>مشاهده اقساط</span>
        </Button>
      </Link>
    </div>
  );
};

export default CellAction;
