"use client";

import { Input } from "@/components/ui/input";
import useMount from "@/hooks/use-mount";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "@/components/submit-button";
import { toast } from "sonner";
import {  axios } from "@/lib/axios";
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
import { categorySchema } from "@/lib/validation/employee/category";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useConfig } from "@/hooks/use-config";
import { PlusCircle } from "lucide-react";

const CreateForm = ({ params }) => {
  const mount = useMount();
  const configHook = useConfig();

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const form = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
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
   

    for (var propName in values) {
      if (values[propName] === null || values[propName] === undefined) {
        delete values[propName];
      }
    }

    const encodedFormData = querystring.stringify({
      ...values,
      cat_first_id: params?.id1,
    });



    await axios
      .post("/api/employee/categories/second", encodedFormData)
      .then((response) => {
  
        if (response.status === 201) {
          toast.success(<ToastSuccess text={"دسته بندی با موفقیت ایجاد شد"} />);
          configHook.setRefreshFlag(!configHook.refreshFlag);
          setIsOpen(false);
          reset();
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
    <div className="mb-3">
      <Button
        variant="outline"
        className="flex items-center gap-1 text-xs font-normal"
        onClick={() => setIsOpen(true)}
      >
        <PlusCircle size={16} strokeWidth={1.5} className="text-primary" />
        <span>افزودن</span>
      </Button>
      <Modal
        title={"افزودن"}
        description={"افزودن دسته بندی"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="w-full">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1">
                <FormField
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-3 lg:col-span-1">
                      <FormLabel>عنوان</FormLabel>
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
      </Modal>
    </div>
  );
};

export default CreateForm;
