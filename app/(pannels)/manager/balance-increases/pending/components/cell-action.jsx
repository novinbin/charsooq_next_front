"use client";

import { Edit, ShieldCheck, ShieldX } from "lucide-react";
import SubmitButton from "@/components/submit-button";
import { axios } from "@/lib/axios";
import { useState } from "react";
import { toast } from "sonner";
import ToastSuccess from "@/components/toast/toast-success";
import ToastError from "@/components/toast/toast-error";
import { useConfig } from "@/hooks/use-config";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes/routes";

const CellAction = ({ data }) => {
  const configHook = useConfig();

  const [loading, setLoading] = useState(false);

  const onApprove = async () => {
    setLoading(true);
    await axios
      .post(`/api/manager/balance-increase/${data.id}/approve`)
      .then((res) => {
        configHook.setRefreshFlag(!configHook.refreshFlag);
        toast.success(<ToastSuccess text={"درخواست با موفقیت تایید شد"} />);
      })
      .catch((err) => {
      
        toast.error(
          <ToastError
            text={
              err?.response?.data?.message ||
              defaultMessages.errors.internalError
            }
          />,
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onReject = async () => {
    setLoading(true);
    await axios
      .post(`/api/manager/balance-increase/${data.id}/reject`)
      .then((res) => {
        configHook.setRefreshFlag(!configHook.refreshFlag);
        toast.success(<ToastSuccess text={"درخواست با موفقیت رد شد"} />);
      })
      .catch((err) => {
     
        toast.error(
          <ToastError
            text={
              err?.response?.data?.message ||
              defaultMessages.errors.internalError
            }
          />,
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <SubmitButton
        loading={loading}
        onClick={onApprove}
        variant="outline"
        className="flex w-full cursor-pointer items-center gap-1 px-2 text-xs font-normal"
      >
        <ShieldCheck size={18} strokeWidth={1.5} className="text-green-500" />
        <span>تایید درخواست</span>
      </SubmitButton>
      <SubmitButton
        loading={loading}
        onClick={onReject}
        variant="outline"
        className="flex w-full cursor-pointer items-center gap-1 px-2 text-xs font-normal"
      >
        <ShieldX size={18} strokeWidth={1.5} className="text-red-500" />
        <span>رد درخواست</span>
      </SubmitButton>
      <Link
        className="w-full"
        href={routes.manager["balance-increases"].requests.edit(
          data.user.id,
          data.id,
        )}
      >
        <Button
          variant="outline"
          className="flex w-full cursor-pointer items-center gap-1 px-2 text-xs font-normal"
        >
          <Edit size={18} strokeWidth={1.5} className="text-primary" />
          <span>ویرایش</span>
        </Button>
      </Link>
    </div>
  );
};

export default CellAction;
