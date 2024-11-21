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
import { ChevronDown, LoaderIcon, Eye, Edit, Trash2 } from "lucide-react";
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
      <DeleteModal
        isOpen={open}
        loading={loading2}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        title="حذف آیتم"
        description="از حذف آیتم مورد نظر مطمئن هستید؟ این اقدام قابل برگشت نمیباشد"
      />

      <Link href={routes.manager.users.details(data.id)}>
        <div className="cursor-pointer rounded-md p-1 transition-all duration-200 hover:bg-muted">
          <Eye size={18} strokeWidth={1.5} className="text-primary" />
        </div>
      </Link>

      <Link href={routes.manager.users.edit(data.id)}>
        <div className="cursor-pointer rounded-md p-1 transition-all duration-200 hover:bg-muted">
          <Edit size={18} strokeWidth={1.5} className="text-primary" />
        </div>
      </Link>

      <div
        className="cursor-pointer rounded-md p-1 transition-all duration-200 hover:bg-muted"
        onClick={() => setOpen(true)}
      >
        <Trash2 size={18} strokeWidth={1.5} className="text-primary" />
      </div>

      <DropdownMenu dir="rtl">
        <DropdownMenuTrigger asChild>
          <Button
            disabled={loading}
            variant="ghost"
            className="flex h-7 gap-1 rounded-xl border-2 border-primary px-4 text-xs"
          >
            {loading ? (
              <LoaderIcon
                className="animate-spin text-primary"
                size={15}
                strokeWidth={1.5}
              />
            ) : (
              <>
                {role}
                <ChevronDown
                  size={15}
                  className="text-primary"
                  strokeWidth={1.5}
                />
              </>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-1">
          {accessTypes.map((item, index) => (
            <DropdownMenuItem
              onClick={() => {
                changeAccess(item.title);
              }}
              key={item.title}
              className={cn(
                "cursor-pointer rounded-3xl",
                role === item.title && "bg-primary/70",
              )}
            >
              {item.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CellAction;
