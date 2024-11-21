"use client";

import { Eye } from "lucide-react";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { Button } from "@/components/ui/button";

const CellAction = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <Link href={routes.manager["balance-increases"].requests.all(data.id)}>
        <Button
          variant="outline"
          className="flex cursor-pointer items-center gap-1 text-xs font-normal"
        >
          <Eye size={18} strokeWidth={1.5} className="text-primary" />
          <span>مشاهده درخواست ها</span>
        </Button>
      </Link>
    </div>
  );
};

export default CellAction;
