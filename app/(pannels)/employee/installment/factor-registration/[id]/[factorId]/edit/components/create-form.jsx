"use client";

import { Input } from "@/components/ui/input";
import useMount from "@/hooks/use-mount";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "@/components/submit-button";
import { toast } from "sonner";
import { axios } from "@/lib/axios";
import querystring from "querystring";
import ToastError from "@/components/toast/toast-error";
import { defaultMessages } from "@/lib/default-messages";
import ToastSuccess from "@/components/toast/toast-success";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Modal } from "@/components/ui/modal";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useConfig } from "@/hooks/use-config";
import { PlusCircle } from "lucide-react";
import { productFactorSchema } from "@/lib/validation/employee/product-factor";
import { removeChar, separatePrice } from "@/lib/persian-price-format";

const CreateForm = ({ params: { factorId } }) => {
  const mount = useMount();
  const configHook = useConfig();
  const inputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    configHook.setRefreshFlag(!configHook.refreshFlag);
  };

  const form = useForm({
    resolver: zodResolver(productFactorSchema),
    defaultValues: {
      title: "",
      code: "",
      price: "",
      count: "",
    },
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    control,
    reset,
    setValue,

    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values) => {
    for (var propName in values) {
      if (values[propName] === null || values[propName] === undefined) {
        delete values[propName];
      }
    }

    const encodedFormData = querystring.stringify({
      ...values,
      price: removeChar(",", values.price),
    });

    await axios
      .post(`/api/employee/factor/${factorId}/add-product`, encodedFormData)
      .then((response) => {
        if (response.status === 201) {
          toast.success(<ToastSuccess text={"محصول با موفقیت اضافه شد"} />);
          reset();
          seeRef();
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

  const seeRef = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Button
        variant="outline"
        className="flex items-center gap-1 text-xs font-normal"
        onClick={() => setIsOpen(true)}
      >
        <PlusCircle size={16} strokeWidth={1.5} className="text-primary" />
        <span>افزودن محصول</span>
      </Button>
      <Modal
        title={"افزودن"}
        description={"افزودن محصول"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="w-full">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-2">
                <FormField
                  control={control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="col-span-3 lg:col-span-1">
                      <FormLabel>عنوان</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          placeholder="حداقل ۲ کاراکتر"
                          {...field}
                          ref={inputRef}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="code"
                  render={({ field }) => (
                    <FormItem className="col-span-3 lg:col-span-1">
                      <FormLabel>کد کالا</FormLabel>
                      <FormControl>
                        <Input
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
                  name="count"
                  render={({ field }) => (
                    <FormItem className="col-span-3 lg:col-span-1">
                      <FormLabel>تعداد</FormLabel>
                      <FormControl>
                        <Input
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
                  name="price"
                  render={({ field }) => (
                    <FormItem className="col-span-3 lg:col-span-1">
                      <FormLabel>قیمت (تومان)</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          placeholder="قیمت"
                          {...field}
                          onChange={(e) => {
                            const newEvent = removeChar(",", e.target.value);
                            if (!isNaN(newEvent)) {
                              setValue("price", separatePrice(e.target.value), {
                                shouldValidate: true,
                              });
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <SubmitButton className="mt-3" loading={isSubmitting}>
                ارسال و جدید
              </SubmitButton>
            </form>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateForm;
