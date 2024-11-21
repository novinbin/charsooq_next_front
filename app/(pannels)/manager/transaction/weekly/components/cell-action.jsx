"use client";

import { Button } from "@/components/ui/button";
import ToastError from "@/components/toast/toast-error";
import { defaultMessages } from "@/lib/default-messages";
import { useConfig } from "@/hooks/use-config";
import { useState } from "react";
import { axios } from "@/lib/axios";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import DeleteModal from "@/components/dialogs/delete-dialog";
import ToastSuccess from "@/components/toast/toast-success";
import { Edit, Eye, Trash2, User2Icon } from "lucide-react";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { useFactor } from "@/hooks/use-factor";

const CellAction = ({ data }) => {
  const factorHook = useFactor();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const configHook = useConfig();
  const params = useParams();

  return (
    <div className="flex items-center justify-center gap-1">

      <div className="flex flex-col gap-1">
        <Link
          href={routes.manager["factor-registration"].factors.all(data.user.id)}
          className="w-full"
        >
          <Button
            variant="outline"
            className="flex items-center gap-1 text-xs font-normal"
          >
            <Eye size={16} strokeWidth={1.5} className="text-primary" />
            <span>مشاهده فاکتور</span>
          </Button>
        </Link>

        <Link href={routes.manager.users.details(data.user.id)} className="w-full">
          <Button
            variant="outline"
            className="flex w-full items-center gap-1 text-xs font-normal"
          >
            <User2Icon size={16} strokeWidth={1.5} className="text-primary" />
            <span>مشاهده کاربر</span>
          </Button>
        </Link>

      </div>
    </div>
  );
};

export default CellAction;
