"use client";

import { Edit, Eye, Trash2 } from "lucide-react";
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
import { useParams } from "next/navigation";
import { farsiNumber } from "@/lib/farsi-number";

const Deleteinstallments = () => {
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const configHook = useConfig();

  const onDelete = async () => {
    try {
      setLoading(true);


      const response = await axios.delete(
        `/api/employee/factor/${params.factorId}/installments`,
      );

      

      if (response.status === 204) {
        toast.success(
          <ToastSuccess
            text={`اقساط فاکتور ${farsiNumber(params.factorId)} با موفقیت حذف شدند`}
          />,
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
    <div>
      <DeleteModal
        isOpen={open}
        loading={loading}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        title="حذف اقساط"
        description="از حذف اقساط مورد نظر مطمئن هستید؟ این اقدام قابل برگشت نمیباشد"
      />

      <Button
        variant="outline"
        className="flex items-center gap-1 text-xs font-normal"
        onClick={() => setOpen(true)}
      >
        <Trash2 size={16} strokeWidth={1.5} className="text-primary" />
        <span>حذف تمامی اقساط</span>
      </Button>
    </div>
  );
};

export default Deleteinstallments;
