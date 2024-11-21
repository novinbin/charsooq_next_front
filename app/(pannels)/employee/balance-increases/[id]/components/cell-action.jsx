"use client";

import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { Button } from "@/components/ui/button";
import DeleteModal from "@/components/dialogs/delete-dialog";
import ToastSuccess from "@/components/toast/toast-success";
import ToastError from "@/components/toast/toast-error";
import { defaultMessages } from "@/lib/default-messages";
import { useConfig } from "@/hooks/use-config";
import { useState } from "react";
import { axios } from "@/lib/axios";
import { toast } from "sonner";

const CellAction = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const configHook = useConfig();

  const onDelete = async () => {
    try {
      setLoading(true);

    

      const response = await axios.delete(
        `/api/employee/balance-increase/${data.id}`,
      );

    

      if (response.status === 204) {
        toast.success(<ToastSuccess text={"آیتم مورد نظر با موفقیت حذف شد"} />);
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
      {data.status === "pending" && (
        <>
          <DeleteModal
            isOpen={open}
            loading={loading}
            onClose={() => setOpen(false)}
            onConfirm={onDelete}
            title="حذف آیتم"
            description="از حذف آیتم مورد نظر مطمئن هستید؟ این اقدام قابل برگشت نمیباشد"
          />

          <Link
            href={routes.employee["balance-increases"].requests.edit(
              data.user.id,
              data.id,
            )}
          >
            <Button
              variant="outline"
              className="flex cursor-pointer items-center gap-1 text-xs font-normal"
            >
              <Edit size={16} strokeWidth={1.5} className="text-primary" />
              <span>ویرایش</span>
            </Button>
          </Link>

          <Button
            variant="outline"
            className="flex cursor-pointer items-center gap-1 text-xs font-normal"
            onClick={() => setOpen(true)}
          >
            <Trash2 size={16} strokeWidth={1.5} className="text-primary" />
            <span>حذف</span>
          </Button>
        </>
      )}
    </div>
  );
};

export default CellAction;
