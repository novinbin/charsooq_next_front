"use client";

import { CircleCheckBig, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import ToastError from "@/components/toast/toast-error";
import { defaultMessages } from "@/lib/default-messages";
import { useConfig } from "@/hooks/use-config";
import { useState } from "react";
import { axios } from "@/lib/axios";
import { toast } from "sonner";
import { Modal } from "@/components/ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SubmitButton from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { profitPercentSchema } from "@/lib/validation/employee/profit-percent";
import querystring from "querystring";

const InstallmentCellAction = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const configHook = useConfig();

  const form = useForm({
    resolver: zodResolver(profitPercentSchema),
    defaultValues: {
      profit_percent: data.profit_rate,
    },
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values) => {
    const { profit_percent } = values;

    const encodedFormData = querystring.stringify({
      profit_percent,
    });


    await axios
      .post(`/api/manager/installment/${data.id}/add-profit`, encodedFormData)
      .then((response2) => {
        if (response2.status === 200) {
          toast.success(
            <div className="flex items-center gap-2">
              <span>
                <CircleCheckBig className="text-green-600" />
              </span>
              <span>{"نرخ قسط با موفقیت تغییر کرد"}</span>
            </div>,
          );

          configHook.setRefreshFlag(!configHook.refreshFlag);
          reset();
          setOpen(false);
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
      });
  };
  return (
    <div className="flex items-center justify-center gap-1">
      <Button
        variant="outline"
        className="flex items-center gap-1 text-xs font-normal"
        onClick={() => setOpen(true)}
      >
        <Edit size={16} strokeWidth={1.5} className="text-primary" />
        <span>تغییر نرخ</span>
      </Button>
      <Modal
        isOpen={open}
        loading={loading}
        onClose={() => setOpen(false)}
        onConfirm={() => {}}
        title="تغییر نرخ"
      >
        <div className="flex flex-col gap-2">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-2">
                <FormField
                  control={control}
                  name="profit_percent"
                  render={({ field }) => (
                    <FormItem className="col-span-3 lg:col-span-1">
                      <FormLabel>درصد سود</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          autoComplete="off"
                          placeholder="بین ۱ تا ۱۰۰"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <SubmitButton className="mt-3" loading={isSubmitting}>
                ارسال
              </SubmitButton>
            </form>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default InstallmentCellAction;
