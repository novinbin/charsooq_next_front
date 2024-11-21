"use client";

import { Eye, List } from "lucide-react";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { Button } from "@/components/ui/button";

const CellAction = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <Link href={routes.employee.users.details(data.id)}>
        <div className="cursor-pointer rounded-md p-1 transition-all duration-200 hover:bg-muted">
          <Eye size={18} strokeWidth={1.5} className="text-primary" />
        </div>
      </Link>
      <Link href={routes.employee.installment["factor-registration"].factors.all(data.id)}>
        <Button
          variant="outline"
          className="flex cursor-pointer items-center gap-1 text-xs font-normal"
        >
          <List
            size={18}
            strokeWidth={1.5}
            className="rotate-180 text-primary"
          />
          <span>مشاهده فاکتور ها</span>
        </Button>
      </Link>
    </div>
  );
};

export default CellAction;
