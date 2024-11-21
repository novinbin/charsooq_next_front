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
import { ChevronDown, LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import ToastError from "@/components/toast/toast-error";
import ToastSuccess from "@/components/toast/toast-success";
import { defaultMessages } from "@/lib/default-messages";
import querystring from "querystring";
import ConfirmationModal from "./installment-payConfirmed-modal";

const accessTypes = [
  {
    title: "در انتظار پرداخت",
  },
  {
    title: "تسویه شده",
  },
];

const CellActionInstallment = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(
    data.status === "in_due"
      ? "در انتظار پرداخت"
      : data.status === "delayed"
        ? "تاخیر در پرداخت"
        : "تسویه شده",
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [pendingAccess, setPendingAccess] = useState(null);

  const changeAccess = async (accessName, delayDays) => {
    setLoading(true);

    const newAccessName = accessName === "در انتظار پرداخت" ? "in_due" : "paid";

    const encodedFormData = querystring.stringify({
      status: newAccessName,
      delay_days: delayDays || 0, // Send delayDays with the API request
    });

    await axios
      .post(`/api/manager/installment/${data.id}/set-status`, encodedFormData)
      .then((response) => {
        if (response.status === 200) {
          toast.success(<ToastSuccess text={"وضعیت با موفقیت تغییر کرد"} />);
          setStatus(accessName);
          location.reload();
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

  const handleAccessChange = (accessName) => {
    if (accessName === "تسویه شده") {
      setPendingAccess(accessName);
      setModalOpen(true);
    } else {
      changeAccess(accessName);
    }
  };

  return (
    <div className="flex items-center justify-center gap-1">
      <DropdownMenu dir="rtl">
        <DropdownMenuTrigger asChild>
          <Button
            disabled={loading}
            variant="ghost"
            className={`flex h-7 gap-1 rounded-xl border-2 ${status === "تاخیر در پرداخت" ? "border-red-500" : status === "تسویه شده" ? "border-green-500" : "border-primary"} px-4 text-xs`}
          >
            {loading ? (
              <LoaderIcon
                className="animate-spin text-primary"
                size={15}
                strokeWidth={1.5}
              />
            ) : (
              <>
                {status}
                <ChevronDown
                  size={15}
                  className={`${status === "تاخیر در پرداخت" ? "text-red-500" : status === "تسویه شده" ? "text-green-500" : "text-primary"}`}
                  strokeWidth={1.5}
                />
              </>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-1">
          {accessTypes.map((item, index) => (
            <DropdownMenuItem
              onClick={() => handleAccessChange(item.title)}
              key={item.title}
              className={cn(
                "cursor-pointer rounded-3xl",
                status === item.title && "bg-primary/70",
              )}
            >
              {item.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={(delayDays) => changeAccess(pendingAccess, delayDays)} // Pass delayDays to changeAccess
      />
    </div>
  );
};

export default CellActionInstallment;
