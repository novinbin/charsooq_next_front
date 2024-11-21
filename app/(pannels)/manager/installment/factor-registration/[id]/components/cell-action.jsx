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
import { Edit, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { useFactor } from "@/hooks/use-factor";

const CellAction = ({ data }) => {
  const factorHook = useFactor();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const configHook = useConfig();
  const params = useParams();

  const onDelete = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(`/api/manager/factor/${data.id}`);

      if (response.status === 204) {
        toast.success(
          <ToastSuccess text={"فاکتور مورد نظر با موفقیت حذف شد"} />,
        );
        configHook.setRefreshFlag(!configHook.refreshFlag);
      }
    } catch (error) {
      toast.error(
        <ToastError
          text={
            error?.response?.data?.message ||
            defaultMessages.errors.internalError
          }
        />,
      );
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <div className="flex items-center justify-center gap-1">
      <DeleteModal
        isOpen={open}
        loading={loading}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        title="حذف آیتم"
        description="از حذف آیتم مورد نظر مطمئن هستید؟ این اقدام قابل برگشت نمیباشد"
      />

      <div className="flex flex-col gap-1">
        <Link
          href={routes.manager["factor-registration"].factors.details(
            params.id,
            data.id,
          )}
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

        <Link
          href={routes.manager["factor-registration"].factors.edit(
            params.id,
            data.id,
          )}
          className="w-full"
          onClick={() =>
            factorHook.setSelectedFactor(
              data?.dasht_info?.SaleInvoiceID ? data?.dasht_info : null,
            )
          }
        >
          <Button
            variant="outline"
            className="flex w-full items-center gap-1 text-xs font-normal"
          >
            <Edit size={16} strokeWidth={1.5} className="text-primary" />
            <span>ویرایش</span>
          </Button>
        </Link>

        <Button
          variant="outline"
          className="flex items-center gap-1 text-xs font-normal"
          onClick={() => setOpen(true)}
        >
          <Trash2 size={16} strokeWidth={1.5} className="text-primary" />
          <span>حذف</span>
        </Button>
      </div>
    </div>
  );
};

export default CellAction;
