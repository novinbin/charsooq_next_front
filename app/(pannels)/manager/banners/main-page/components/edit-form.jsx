"use client";

import { CircleCheckBig, Edit, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import ToastError from "@/components/toast/toast-error";
import { defaultMessages } from "@/lib/default-messages";
import { useConfig } from "@/hooks/use-config";
import { useCallback, useState } from "react";
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
import { bannerSchema } from "@/lib/validation/manager/banner";
import Image from "next/image";
import Dropzone from "react-dropzone";

const EditForm = ({ data }) => {
  const [open, setOpen] = useState(false);

  const configHook = useConfig();

  const form = useForm({
    resolver: zodResolver(bannerSchema),
    defaultValues: {
      key: data.key,
      link: data.link,
      photo: "",
    },
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values) => {
  

    const formData = new FormData();

    formData.append(data.key, values.photo.file);
    formData.append(`${data.key}_link`, values.link);

    

    await axios
      .post(`/api/manager/banners`, formData)
      .then((response) => {
   
        toast.success(
          <div className="flex items-center gap-2">
            <span>
              <CircleCheckBig className="text-green-600" />
            </span>
            <span>{"اطلاعات با موفقیت تغییر کردند"}</span>
          </div>,
        );

        configHook.setRefreshFlag(!configHook.refreshFlag);
        setOpen(false);
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

  const onDrop = useCallback(
    (files) =>
      files.map((file) => {
        setValue(
          "photo",
          {
            file: file,
            size: String(file.size),
            name: file.name,
            type: file.type,
          },
          {
            shouldValidate: true,
          },
        );
      }),
    [getValues("photo")],
  );
  return (
    <div className="flex items-center justify-center gap-1">
      <Button
        variant="outline"
        className="flex items-center gap-1 text-xs font-normal"
        onClick={() => setOpen(true)}
      >
        <Edit size={16} strokeWidth={1.5} className="text-primary" />
        <span>ویرایش</span>
      </Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {}}
        title="ویرایش"
      >
        <div className="flex flex-col gap-2">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-2">
                <FormField
                  control={control}
                  name="link"
                  render={({ field }) => (
                    <FormItem className="col-span-3 lg:col-span-1">
                      <FormLabel>لینک</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          placeholder="لینک"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="photo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>تصویر</FormLabel>
                      <FormControl>
                        <Dropzone
                          maxSize={1024 * 1024 * 2}
                          maxFiles={1}
                          onDrop={onDrop}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div className="px-4md:px-10 grid grid-cols-1 gap-3">
                              <div
                                {...getRootProps()}
                                className="mx-auto flex w-full cursor-pointer items-center justify-center rounded-xl border-[3px] border-dashed border-primary p-4"
                              >
                                <input {...getInputProps()} />
                                <div className="flex flex-col items-center text-muted-foreground">
                                  <span>آپلود تصویر</span>
                                  <span className="mt-2 text-xs">
                                    برای انتخاب تصویر کلیک کنید و یا تصویر خود
                                    را داخل کادر بکشید (حداکثر با حجم ۲ مگابایت)
                                  </span>
                                  <Upload
                                    size={60}
                                    className="mt-2 text-primary"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <span>تصویر فعلی</span>
                                  <Image
                                    src={data.photo}
                                    className="aspect-video w-full rounded-lg object-contain"
                                    width={240}
                                    height={160}
                                    alt="product"
                                  />
                                </div>

                                {getValues("photo") && (
                                  <div>
                                    <span>تصویر جدید</span>
                                    <Image
                                      src={URL.createObjectURL(
                                        getValues("photo").file,
                                      )}
                                      className="aspect-video w-full rounded-lg object-contain"
                                      width={240}
                                      height={160}
                                      alt="product"
                                    />
                                    <Button
                                      variant="outline"
                                      className="mx-auto mt-1 h-8 px-2"
                                      onClick={() =>
                                        setValue("photo", null, {
                                          shouldValidate: true,
                                        })
                                      }
                                    >
                                      <Trash2
                                        size={16}
                                        strokeWidth={1.5}
                                        className="text-primary"
                                      />
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </Dropzone>
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

export default EditForm;
