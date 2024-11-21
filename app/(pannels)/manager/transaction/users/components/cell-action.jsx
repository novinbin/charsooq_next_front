"use client";

import { axios } from "@/lib/axios";
import { useState } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, LoaderIcon, Eye, Edit, Trash2, List } from "lucide-react";
import { cn } from "@/lib/utils";
import ToastError from "@/components/toast/toast-error";
import ToastSuccess from "@/components/toast/toast-success";
import Link from "next/link";
import { routes } from "@/routes/routes";
import DeleteModal from "@/components/dialogs/delete-dialog";
import { useConfig } from "@/hooks/use-config";
import { defaultMessages } from "@/lib/default-messages";

const accessTypes = [
  {
    title: "مدیر",
  },
  {
    title: "پرسنل",
  },
  {
    title: "نویسنده",
  },
  {
    title: "مشتری",
  },
  {
    title: "ارگان",
  },
];

const CellAction = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(
    data.role === "manager"
      ? "مدیر"
      : data.role === "employee"
        ? "پرسنل"
        : data.role === "author"
          ? "نویسنده"
          : data.role === "organ"
            ? "ارگان"
            : "مشتری",
  );

  const changeAccess = async (accessName) => {
    setLoading(true);

    const newAccessName =
      accessName === "مدیر"
        ? "manager"
        : accessName === "پرسنل"
          ? "employee"
          : accessName === "نویسنده"
            ? "author"
            : accessName === "ارگان"
              ? "organ"
              : "user";

    await axios
      .put(`/api/manager/user/${data.id}/change-access?access=${newAccessName}`)
      .then((response) => {
        if (response.status === 200) {
          toast.success(<ToastSuccess text={"دسترسی با موفقیت تغییر کرد"} />);
          setRole(accessName);
        }
      })
      .catch((error) => {
        toast.error(
          <ToastError
            text={
              error?.response?.data?.message ||
              defaultMessages.errors.internalError
            }
          />,
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const configHook = useConfig();

  const onDelete = async () => {
    try {
      setLoading2(true);

      const response = await axios.delete(`/api/manager/user/${data.id}`);

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
      setLoading2(false);
      setOpen(false);
    }
  };

  return (
    <div className="flex items-center justify-center gap-1">
      <Link href={routes.manager.transaction.users.details(data.id)}>
        <Button
          variant="outline"
          className="flex cursor-pointer items-center gap-1 text-xs font-normal"
        >
          <List
            size={18}
            strokeWidth={1.5}
            className="rotate-180 text-primary"
          />
          <span>مشاهده تراکنش</span>
        </Button>
      </Link>
    </div>
  );
};

export default CellAction;
