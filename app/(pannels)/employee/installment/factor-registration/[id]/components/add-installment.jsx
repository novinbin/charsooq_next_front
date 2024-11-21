"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useMount from "@/hooks/use-mount";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckBig, PlusCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SubmitButton from "@/components/submit-button";
import { toast } from "sonner";
import { axios } from "@/lib/axios";
import querystring from "querystring";
import ToastError from "@/components/toast/toast-error";
import { defaultMessages } from "@/lib/default-messages";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { installmentSchema } from "@/lib/validation/employee/installment";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { baseDateForm } from "@/lib/date-form";
import { useConfig } from "@/hooks/use-config";

const AddInstallment = ({ data, params: { factorId } }) => {
  const [isOpen, setIsOpen] = useState(false);

  const mount = useMount();

  const configHook = useConfig();

  const form = useForm({
    resolver: zodResolver(installmentSchema),
    defaultValues: {
      factorId: factorId,
      months_count: "",
      profit_percent: "",
      starting_date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    },
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values) => {
    const { factorId, months_count, profit_percent, starting_date } = values;

    const encodedFormData = querystring.stringify({
      factorId,
      months_count,
      profit_percent,
      starting_date: baseDateForm(starting_date),
    });

    await axios
      .post(`/api/employee/factor/${factorId}/installments`, encodedFormData)
      .then((response2) => {
        if (response2.status === 200) {
          toast.success(
            <div className="flex items-center gap-2">
              <span>
                <CircleCheckBig className="text-green-600" />
              </span>
              <span>{"اقساط با موفقیت اضافه شدند"}</span>
            </div>,
          );
          configHook.setRefreshFlag(!configHook.refreshFlag);
          reset();
          setIsOpen(false);
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

  if (!mount) {
    return null;
  }

  return (
    <div>
      <Button
        variant="outline"
        className="flex items-center gap-1 text-xs font-normal"
        onClick={() => setIsOpen(true)}
      >
        <PlusCircle size={16} strokeWidth={1.5} className="text-primary" />
        <span> افزودن اقساط</span>
      </Button>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent className="sm:max-w-[825px]">
          <DialogHeader>
            <DialogTitle className="mr-4 text-right">اقساط</DialogTitle>
          </DialogHeader>
          <div className="w-full">
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={control}
                    name="factorId"
                    render={({ field }) => (
                      <FormItem className="col-span-3 lg:col-span-1">
                        <FormLabel>شماره فاکتور</FormLabel>
                        <FormControl>
                          <Input
                            disabled
                            autoComplete="off"
                            placeholder="حداقل ۲ کاراکتر"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="months_count"
                    render={({ field }) => (
                      <FormItem className="col-span-3 lg:col-span-1">
                        <FormLabel>تعداد اقساط</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            autoComplete="off"
                            placeholder="تعداد"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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

                  <FormField
                    control={control}
                    name="starting_date"
                    render={({ field }) => (
                      <FormItem className="col-span-3 flex flex-col gap-1 text-right lg:col-span-1">
                        <FormLabel>تاریخ شروع</FormLabel>
                        <FormControl>
                          <DatePicker
                            value={getValues("starting_date")}
                            onChange={(date) => {
                              date?.isValid
                                ? setValue("starting_date", new Date(date))
                                : "";
                            }}
                            format={false ? "MM/DD/YYYY" : "YYYY/MM/DD"}
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-right"
                            style={{
                              width: "100%",
                              paddingTop: "19px",
                              paddingBottom: "19px",
                              borderColor: "rgb(226 232 240)",
                            }}
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
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddInstallment;
