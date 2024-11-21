"use client";

import { LogIn } from "lucide-react";
import SubmitButton from "@/components/submit-button";
import querystring from "querystring";
import { toast } from "sonner";
import ToastSuccess from "@/components/toast/toast-success";
import { Input } from "@/components/ui/input";
import useMount from "@/hooks/use-mount";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  axios } from "@/lib/axios";
import ToastError from "@/components/toast/toast-error";
import { defaultMessages } from "@/lib/default-messages";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { dashtLoginSchema } from "@/lib/validation/manager/dasht-login";

const Login = () => {
  const mount = useMount();

  const form = useForm({
    resolver: zodResolver(dashtLoginSchema),
    defaultValues: {
      guid: "",
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
    const encodedFormData = querystring.stringify({
      guid: values.guid,
    });

    

    await axios
      .post(`/api/manager/dasht/login`, encodedFormData)
      .then((response) => {
     
        toast.success(
          <ToastSuccess text={"اتصال به نرم افزار دشت با موفقیت انجام شد"} />,
        );
        reset();
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
      .finally(() => {});
  };

  if (!mount) {
    return null;
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <FormField
              control={control}
              name="guid"
              render={({ field }) => (
                <FormItem className="col-span-3 lg:col-span-1">
                  <FormLabel>کلید اتصال</FormLabel>
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
          </div>

          <SubmitButton className="mt-3" loading={isSubmitting}>
            ارسال
          </SubmitButton>
        </form>
      </Form>
    </div>
  );
};

export default Login;
