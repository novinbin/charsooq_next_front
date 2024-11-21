"use client";

import { useState } from "react";
import { Eye, Trash2 } from "lucide-react";
import DeleteModal from "@/components/dialogs/delete-dialog";
import { useConfig } from "@/hooks/use-config";
import { toast } from "sonner";
import ToastSuccess from "@/components/toast/toast-success";
import ToastError from "@/components/toast/toast-error";
import { axios } from "@/lib/axios";
import { defaultMessages } from "@/lib/default-messages";
import EditForm from "./edit-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes/routes";
import { useParams } from "next/navigation";

const CellAction = ({ data }) => {
  const configHook = useConfig();

  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);

    

      const response = await axios.delete(
        `/api/employee/categories/second/${data.id}`,
      );

      if (response.status === 204) {
        toast.success(
          <ToastSuccess text={"دسته بندی مورد نظر با موفقیت حذف شد"} />,
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

      <EditForm data={data} />

      <div
        className="cursor-pointer rounded-md p-1 transition-all duration-200 hover:bg-muted"
        onClick={() => setOpen(true)}
      >
        <Trash2 size={18} strokeWidth={1.5} className="text-primary" />
      </div>

      <Link href={routes.employee.categories.third(params.id1, data.id)}>
        <Button
          variant="outline"
          className="flex items-center gap-1 text-xs font-normal"
        >
          <Eye size={16} strokeWidth={1.5} className="text-primary" />
          <span>دسته بندی ها</span>
        </Button>
      </Link>
    </div>
  );
};

export default CellAction;
