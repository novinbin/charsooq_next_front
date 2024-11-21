"use client";


import { axios } from "@/lib/axios";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import ToastError from "@/components/toast/toast-error";
import ToastSuccess from "@/components/toast/toast-success";
import DeleteModal from "@/components/dialogs/delete-dialog";
import { useConfig } from "@/hooks/use-config";
import { defaultMessages } from "@/lib/default-messages";

const CellAction = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const configHook = useConfig();

  const onDelete = async () => {
    try {
      setLoading(true);


      const response = await axios.delete(
        `/api/manager/discount-code/${data.id}`,
      );

      if (response.status === 204) {
        toast.success(<ToastSuccess text={"کد تخفیف با موفقیت حذف شد"} />);
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

      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="flex cursor-pointer items-center gap-1 text-xs font-normal"
      >
        <Trash2 size={16} strokeWidth={1.5} className="text-primary" />
        <span>حذف</span>
      </Button>
    </div>
  );
};

export default CellAction;
